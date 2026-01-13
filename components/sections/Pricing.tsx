import { CreativePricing } from "@/components/pricing/creative-pricing"
import type { PricingTier } from "@/components/pricing/creative-pricing"
import { Button } from "@/components/ui/button"
import { Check, Pencil, Star, Sparkles } from "lucide-react";



const sampleTiers: PricingTier[] = [
    {
        name: "Basic",
        icon: <Pencil className="w-6 h-6" />,
        price: 3000,
        description: "Perfect for portfolio websites & personal projects",
        color: "amber",
        features: [
            "hosting for 1 year",
            "admin dashboard",
            "responsive design",
            "Basic Transitions",
            "Basic SEO",
        ],
    },
    {
        name: "Standard Website",
        icon: <Star className="w-6 h-6" />,
        price: 4500,
        description: "For small companies & entrepreneurs",
        color: "blue",
        features: [
            "website with 5 pages",
            "Custom Domain",
            "advanced SEO",
            "Email Support",
        ],
        popular: true,
    },
    {
        name: "Pro Website",
        icon: <Sparkles className="w-6 h-6" />,
        price: 7500,
        description: "For professional companies & agencies",
        color: "purple",
        features: [
            "Multi-tenant platform",
            "user accounts & roles",
            "Custom Domain",
            "framer motion and advanced animations",
            "SEO and Analytics",

        ],
    },
];


function CreativePricingDemo() {
    return <CreativePricing  tiers={sampleTiers} />
}

export { CreativePricingDemo }