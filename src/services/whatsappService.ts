import { Lead } from '../types/lead';

const SCOOPFUL_PHONE = '919019414130'; // Verified official WhatsApp number for Scoopful (Revanth Dinesh)

export class WhatsAppService {
  public static getConsumerOrderUrl(flavourName?: string): string {
    const text = flavourName
      ? `Hi Scoopful! I would like to order ${flavourName} in Bengaluru.`
      : `Hi Scoopful! I'd like to know more about your flavours and pricing.`;
    return `https://wa.me/${SCOOPFUL_PHONE}?text=${encodeURIComponent(text)}`;
  }

  public static getPartnerQualificationUrl(lead: Lead): string {
    const programmeLabel = {
      franchise_foco: 'FOCO Franchise Parlour',
      franchise_fofo: 'FOFO Franchise Parlour',
      founding_partner: 'Founding Partner Programme (<₹10L)',
      cafe_freezer: 'Café Freezer Revenue Share',
      distributor: 'Territory Distribution',
      horeca_bulk: 'HORECA Bulk Supply',
      white_label: 'White-Label Manufacturing'
    }[lead.programme] || 'Commercial Partnership';

    const locationStr = lead.area ? `${lead.city} (${lead.area})` : lead.city;

    const message = [
      `Hi Scoopful & Revanth,`,
      `I have submitted a commercial qualification enquiry through the website.`,
      `• Lead Ref: ${lead.id}`,
      `• Name: ${lead.fullName}`,
      `• Programme: ${programmeLabel}`,
      `• Location: ${locationStr}`,
      `• Timeline: ${lead.timeline.replace(/_/g, ' ')}`,
      lead.notes ? `• Note: "${lead.notes}"` : '',
      `Looking forward to scheduling our discovery discussion.`
    ].filter(Boolean).join('\n');

    return `https://wa.me/${SCOOPFUL_PHONE}?text=${encodeURIComponent(message)}`;
  }

  public static getDirectEnquiryUrl(programmeName: string): string {
    const text = `Hi Scoopful! I am interested in the ${programmeName} programme and would like to understand terms and next steps.`;
    return `https://wa.me/${SCOOPFUL_PHONE}?text=${encodeURIComponent(text)}`;
  }
}
