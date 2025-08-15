"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, Check } from "lucide-react";
import { motion } from "framer-motion";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openShare = (platform: keyof typeof shareData) => {
    window.open(shareData[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex items-center gap-2 text-gray-600">
        <Share2 className="w-4 h-4" />
        <span className="font-medium">Share this article:</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => openShare('twitter')}
          className="border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
        >
          <Twitter className="w-4 h-4 mr-2" />
          Twitter
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => openShare('linkedin')}
          className="border-gray-300 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-all duration-200"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => openShare('facebook')}
          className="border-gray-300 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
        >
          <Facebook className="w-4 h-4 mr-2" />
          Facebook
        </Button>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className={`border-gray-300 transition-all duration-200 ${
              copied
                ? "bg-green-50 border-green-400 text-green-600"
                : "hover:bg-gray-50 hover:border-[#babc6b] hover:text-[#babc6b]"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <LinkIcon className="w-4 h-4 mr-2" />
                Copy Link
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
