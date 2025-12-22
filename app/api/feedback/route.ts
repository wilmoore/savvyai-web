import { NextRequest, NextResponse } from 'next/server';
import { isValidWorkshop } from '@/lib/workshop-config';
import type { WorkshopFeedback } from '@/types/workshop';

/**
 * Workshop Feedback API Endpoint
 *
 * POST /api/feedback
 *
 * Phase 1: Stub implementation (logs to console)
 * Phase 2: Wire to Notion API
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as WorkshopFeedback;

    // Validate required fields
    if (!body.workshopSlug || !body.confidence || !body.valuablePart || !body.planToBuild) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate workshop exists
    if (!isValidWorkshop(body.workshopSlug)) {
      return NextResponse.json({ error: 'Invalid workshop' }, { status: 400 });
    }

    // Validate confidence range
    if (body.confidence < 1 || body.confidence > 10) {
      return NextResponse.json({ error: 'Confidence must be between 1 and 10' }, { status: 400 });
    }

    // Phase 1: Log feedback (stub implementation)
    // TODO: Phase 2 - Wire to Notion API
    console.log('[Feedback Received]', {
      workshopSlug: body.workshopSlug,
      confidence: body.confidence,
      valuablePart:
        body.valuablePart.substring(0, 100) + (body.valuablePart.length > 100 ? '...' : ''),
      planToBuild:
        body.planToBuild.substring(0, 100) + (body.planToBuild.length > 100 ? '...' : ''),
      email: body.email || '[not provided]',
      submittedAt: body.submittedAt,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Feedback Error]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
