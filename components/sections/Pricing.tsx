'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '3,000 MAD',
    description: 'Portfolio websites & personal projects',
    features: ['Hosting for 1 year', 'Admin dashboard', 'Responsive design', 'Basic transitions', 'Basic SEO'],
  },
  {
    name: 'Standard',
    price: '4,500 MAD',
    description: 'Small companies & entrepreneurs',
    popular: true,
    features: ['Website with 5 pages', 'Custom domain', 'Advanced SEO', 'Email support'],
  },
  {
    name: 'Pro',
    price: '7,500 MAD',
    description: 'Professional companies & agencies',
    features: ['Multi-tenant platform', 'User accounts & roles', 'Custom domain', 'Framer Motion animations', 'SEO and analytics'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 text-sm">$ cat pricing.json</p>
          <div className="border-t border-border mt-2" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-2">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`border flex flex-col transition-colors duration-200 ${
                tier.popular
                  ? 'border-green-400/50 bg-green-400/5'
                  : 'border-border hover:border-green-400/30'
              }`}
            >
              <div className="p-5 space-y-4 flex-1 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{tier.name}</span>
                    {tier.popular && (
                      <span className="text-green-400 border border-green-400/50 px-1.5 py-0.5 text-xs">
                        popular
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>

                <div className="border-t border-border pt-3">
                  <span className="text-lg font-bold text-foreground">{tier.price}</span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-muted-foreground/40"># features</p>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-400 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:mehdimoungids@gmail.com"
                className={`block text-center text-xs py-2.5 border-t transition-colors duration-200 ${
                  tier.popular
                    ? 'border-green-400/50 text-green-400 hover:bg-green-400/10'
                    : 'border-border text-muted-foreground hover:border-green-400/30 hover:text-foreground'
                }`}
              >
                ./contact-me.sh
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
