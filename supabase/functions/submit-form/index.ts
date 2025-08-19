import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Skip JWT verification for this public function
  // This makes the function accessible without authentication

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Parse JSON data
    const body = await req.json()
    console.log('Raw request body:', JSON.stringify(body, null, 2))
    const { name, email, company, challenge, selectedSigns } = body

    // Validate required fields
    if (!name || !email || !company || !challenge) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Airtable configuration
    const AIRTABLE_API_KEY = Deno.env.get('AIRTABLE_API_KEY')
    const AIRTABLE_BASE_ID = 'appZ7MIc72G9GDu2L'
    const AIRTABLE_TABLE_ID = 'tblSlR3BAStJBhjpk'

    console.log('AIRTABLE_API_KEY exists:', !!AIRTABLE_API_KEY)
    console.log('AIRTABLE_API_KEY length:', AIRTABLE_API_KEY?.length)

    if (!AIRTABLE_API_KEY) {
      console.error('AIRTABLE_API_KEY is not configured')
      return new Response(
        JSON.stringify({ error: 'Server configuration error - AIRTABLE_API_KEY missing' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Prepare data for Airtable - clean values to avoid encoding issues
    const cleanedFields = {
      Name: name?.toString()?.trim() || '',
      Email: email?.toString()?.trim() || '',
      Company: company?.toString()?.trim() || '', // Use actual company value now
      Body: challenge?.toString()?.trim() || ''
    }
    
    const airtableData = {
      records: [
        {
          fields: cleanedFields
        }
      ]
    }

    // Submit to Airtable
    console.log('Raw data values:', { name, email, company, challenge, selectedSigns })
    console.log('Submitting to Airtable with data:', JSON.stringify(airtableData, null, 2))
    
    const requestBody = JSON.stringify(airtableData)
    console.log('Request body being sent to Airtable:', requestBody)
    
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: requestBody,
      }
    )

    console.log('Airtable response status:', airtableResponse.status)
    console.log('Airtable response headers:', Object.fromEntries(airtableResponse.headers.entries()))

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text()
      console.error('Airtable API error:', errorData)
      console.error('Airtable response status:', airtableResponse.status)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to submit to Airtable',
          details: errorData,
          status: airtableResponse.status
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const result = await airtableResponse.json()
    console.log('Successfully submitted to Airtable:', result)

    return new Response(
      JSON.stringify({ message: 'Form submitted successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error submitting form:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
