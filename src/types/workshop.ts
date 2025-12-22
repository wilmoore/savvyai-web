/**
 * Workshop Types
 *
 * Type definitions for workshop feedback and configuration.
 */

export interface WorkshopDownload {
  label: string;
  url: string;
}

export interface WorkshopFeedback {
  workshopSlug: string;
  confidence: number; // 1-10
  valuablePart: string;
  planToBuild: string;
  email?: string;
  submittedAt: string;
}

export interface WorkshopConfig {
  slug: string;
  title: string;
  active: boolean;
}

export interface WorkshopFeedbackTranslations {
  confidenceQuestion: string;
  valuableQuestion: string;
  planQuestion: string;
  emailLabel: string;
  emailHelper: string;
  submit: string;
  success: string;
  downloadsLabel: string;
}

export interface WorkshopWithFeedback {
  feedback: WorkshopFeedbackTranslations;
  downloads: WorkshopDownload[];
}
