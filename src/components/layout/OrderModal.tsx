import React from 'react';
import { X, ExternalLink, MessageSquare, ShoppingBag } from 'lucide-react';
import { WhatsAppService } from '../../services/whatsappService';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFlavour?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, selectedFlavour }) => {
  if (!isOpen) return null;

  const whatsappUrl = WhatsAppService.getConsumerOrderUrl(selectedFlavour);
  const swiggyUrl = 'https://www.swiggy.com/menu/1052063?source=sharing';
  const zomatoUrl = 'https://www.zomato.com/bangalore/scoopful-1-rajajinagar-bangalore';

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '6px' }}>Fresh From Kitchen</span>
            <h3 id="order-modal-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-plum)' }}>
              {selectedFlavour ? `Order ${selectedFlavour}` : 'Order Scoopful Ice Cream'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close order dialog"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-soft)', padding: '6px' }}
          >
            <X size={22} />
          </button>
        </div>

        <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', marginBottom: '24px' }}>
          Choose your preferred ordering channel. We deliver across Bengaluru with refrigerated insulated cold packs.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ width: '100%', justifyContent: 'space-between', padding: '14px 20px' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare size={18} />
              <span>Order on WhatsApp (Founder Direct)</span>
            </span>
            <ExternalLink size={16} />
          </a>

          <a
            href={swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'space-between', padding: '14px 20px' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShoppingBag size={18} />
              <span>Order on Swiggy (Bengaluru Outlets)</span>
            </span>
            <ExternalLink size={16} />
          </a>

          <a
            href={zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'space-between', padding: '14px 20px' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShoppingBag size={18} />
              <span>Order on Zomato (Bengaluru Outlets)</span>
            </span>
            <ExternalLink size={16} />
          </a>
        </div>

        <div style={{ marginTop: '24px', padding: '14px', backgroundColor: 'var(--color-vanilla)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-line)', fontSize: '0.8125rem', color: 'var(--color-soft)' }}>
          <b style={{ color: 'var(--color-plum)', display: 'block', marginBottom: '2px' }}>Parlour Takeaway & Dine-in</b>
          Visit us at our flagship parlour in Rajajinagar, or parlours in Sahakarnagar and Sarjapur. Open daily until 11:30 PM.
        </div>
      </div>
    </div>
  );
};
