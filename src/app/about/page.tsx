"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Music,
  BookOpen,
  UserPlus,
  ArrowRight,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

interface SocialStats {
  instagram: {
    followers: number | null;
    mediaCount: number | null;
    username: string | null;
    profilePictureUrl: string | null;
    url: string;
  };
}

function formatNumber(num: number | null): string {
  if (num === null) return "-";
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export default function AboutPage() {
  const [socialStats, setSocialStats] = useState<SocialStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSocialStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/social-stats");
        if (response.ok) {
          const data = await response.json();
          setSocialStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch social stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSocialStats();
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-blue-gray-900">
        {/* Hero Section - Meet the Authors */}
        <section className="bg-blue-gray-900/20 px-5 py-12 sm:py-16 md:py-20 md:px-8 xl:px-12">
          <div className="max-w-[var(--max-w-container-lg)] mx-auto flex flex-col gap-8 sm:gap-10 mt-20">
            {/* Section Header */}
            <div className="flex flex-col gap-6 items-center">
              <h1 className="heading-sp-h1 text-white text-center">
                Meet the Authors
              </h1>
              <p className="heading-sp-r-text text-white text-center max-w-full sm:max-w-[var(--max-w-container-base)]">
                Get to know the authors behind our ever-growing universe of
                stories.
              </p>
            </div>
            {/* Profile Image */}
            <div className="relative h-[240px] sm:h-[300px] md:h-[340px] xl:h-[390px] rounded-lg shadow-[var(--shadow-indigo-md)] overflow-hidden mt-4">
              <div className="absolute left-4 sm:left-6 md:left-7 right-4 sm:right-6 md:right-10 top-4 z-10">
                <h2 className="heading-sp-h1 sm:text-4xl md:text-5xl xl:text-6xl text-white">
                  Daniel Alexander
                </h2>
              </div>
              <Image
                src="/images/about/profile/photo.webp"
                alt="Daniel Alexander, author and creator of The Valthakan Times"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Description Text */}
            <div className="max-w-full sm:max-w-[var(--max-w-container-base)] flex flex-col gap-6">
              <p className="heading-sp-r-text text-blue-gray-50 text-left">
                Online or locally, no live underwear we occupy brand codes such
                the first live decade to stand coosting even further we each
                works charter platform.
              </p>
              <p className="heading-sp-r-text text-blue-gray-50 text-left">
                Since then, the arrival of what of the Closer tale societies his
                journey within the Valthyware&apos;s and make Trillingamer as we
                need to want a strange Minister, Nadine, and writer.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-8 items-start sm:items-center w-full">
              {/* <p className="heading-sp-h3-eczar text-white text-center w-full">
                Follow me on social media
              </p> */}

              {/* Instagram - Custom Profile Card (No Post Preview) */}
              {isLoading ? (
                <div className="w-full max-w-[var(--max-w-container-md)] bg-gradient-to-br from-blue-gray-900/70 to-indigo-700/30 border-2 border-indigo-500 rounded-xl p-6 sm:p-8 shadow-[var(--shadow-indigo-sm)] animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Profile Picture Skeleton */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-blue-gray-800/50 border-2 border-indigo-400/50"></div>

                    {/* Profile Info Skeleton */}
                    <div className="flex flex-col items-center sm:items-start gap-3 flex-1">
                      <div className="h-6 w-32 bg-blue-gray-800/50 rounded"></div>
                      <div className="flex gap-6 items-center">
                        <div className="flex flex-col items-center sm:items-start gap-1">
                          <div className="h-8 w-16 bg-blue-gray-800/50 rounded"></div>
                          <div className="h-4 w-20 bg-blue-gray-800/50 rounded"></div>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-1">
                          <div className="h-8 w-12 bg-blue-gray-800/50 rounded"></div>
                          <div className="h-4 w-16 bg-blue-gray-800/50 rounded"></div>
                        </div>
                      </div>
                      <div className="h-9 w-40 bg-indigo-600/50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={
                    socialStats?.instagram.url ||
                    "https://www.instagram.com/dalecsander99/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[var(--max-w-container-md)] bg-gradient-to-br from-blue-gray-900/70 to-indigo-700/30 border-2 border-indigo-500 rounded-xl p-6 sm:p-8 shadow-[var(--shadow-indigo-sm)] hover:shadow-[var(--shadow-indigo-lg)] hover:scale-[1.02] transition-all group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-gray-900/20"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Profile Picture */}
                    <div className="relative">
                      {socialStats?.instagram.profilePictureUrl ? (
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-indigo-400 group-hover:border-indigo-300 transition-colors">
                          <Image
                            src={socialStats.instagram.profilePictureUrl}
                            alt={socialStats.instagram.username || "Instagram"}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-blue-gray-900/50 border-2 border-indigo-400 flex items-center justify-center group-hover:border-indigo-300 transition-colors">
                          <Instagram size={48} className="text-white" />
                        </div>
                      )}
                    </div>

                    {/* Profile Info */}
                    <div className="flex flex-col items-center sm:items-start gap-3 flex-1">
                      <div className="flex items-center gap-2">
                        <Instagram size={24} className="text-indigo-400" />
                        <span className="text-xl sm:text-2xl text-white font-semibold">
                          @{socialStats?.instagram.username || "dalecsander99"}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 items-center">
                        {socialStats?.instagram.followers !== null && (
                          <div className="flex flex-col items-center sm:items-start">
                            <span className="text-2xl sm:text-3xl text-white font-bold">
                              {formatNumber(
                                socialStats?.instagram.followers || null
                              )}
                            </span>
                            <span className="text-sm-figma text-blue-gray-400">
                              followers
                            </span>
                          </div>
                        )}
                        {socialStats?.instagram.mediaCount !== null && (
                          <div className="flex flex-col items-center sm:items-start">
                            <span className="text-2xl sm:text-3xl text-white font-bold">
                              {formatNumber(
                                socialStats?.instagram.mediaCount || null
                              )}
                            </span>
                            <span className="text-sm-figma text-blue-gray-400">
                              posts
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Follow Button */}
                      <div className="mt-2 px-6 py-2 bg-indigo-600 rounded-lg text-white text-sm-figma font-semibold group-hover:bg-indigo-500 transition-colors">
                        Follow on Instagram →
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {/* Other Social Media Links - Simple */}
              <div className="flex gap-4 items-center w-full">
                <a
                  href="https://www.tiktok.com/@dalecsander"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-gray-900/50 border border-indigo-700/20 rounded-lg min-h-[44px] flex items-center justify-center hover:bg-blue-gray-900/70 hover:scale-105 hover:border-indigo-500/40 transition-all group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-gray-900"
                  aria-label="TikTok"
                >
                  <Music
                    size={24}
                    className="text-white group-hover:text-indigo-300"
                  />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-gray-900/50 border border-indigo-700/20 rounded-lg min-h-[44px] flex items-center justify-center hover:bg-blue-gray-900/70 hover:scale-105 hover:border-indigo-500/40 transition-all group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-gray-900"
                  aria-label="Facebook"
                >
                  <Facebook
                    size={24}
                    className="text-white group-hover:text-indigo-300"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@dalecsander?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-gray-900/50 border border-indigo-700/20 rounded-lg min-h-[44px] flex items-center justify-center hover:bg-blue-gray-900/70 hover:scale-105 hover:border-indigo-500/40 transition-all group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-gray-900"
                  aria-label="YouTube"
                >
                  <Youtube
                    size={24}
                    className="text-white group-hover:text-indigo-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        {/* <div className="h-px bg-gradient-to-r from-transparent via-indigo-700/30 to-transparent my-8 sm:my-12"></div> */}

        {/* The Crone Section */}
        <section className="bg-blue-gray-900 px-5 py-12 sm:py-16 md:py-20 md:px-8 xl:px-12 animate-fade-in">
          <div className="max-w-[var(--max-w-container-lg)] mx-auto flex flex-col gap-6 sm:gap-8">
            <h2 className="heading-sp-h2 sm:text-4xl md:text-5xl xl:text-6xl text-white">
              The Crone
            </h2>

            <div className="max-w-full sm:max-w-[var(--max-w-container-base)] flex flex-col gap-6">
              <p className="heading-sp-r-text text-blue-gray-200 text-left">
                An ancient entity that has since started as far away into
                bearing novels rich, the Crone is notorious for her offscreen,
                advice, and general appeals for capable young women who make
                questionable romance decisions.
              </p>
              <p className="heading-sp-r-text text-blue-gray-200 text-left">
                That&apos;s the has dedicated her life to inspiring breakupens,
                answering questions, and being capable in all ranier of scanners
                with Daniel, acting is a hierarchical and design involved in the
                perspectives crevices both magical and not so magical.
              </p>
            </div>

            {/* Crone Illustration */}
            <div className="relative h-[240px] sm:h-[280px] md:h-[320px] xl:h-[340px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/about/illustrations/crone.webp"
                alt="Illustration of The Crone, an ancient entity from The Valthakan Times universe"
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Buttons */}
            <div className="max-w-full sm:max-w-[var(--max-w-container-sm)] flex flex-col gap-6 sm:gap-6 w-full">
              <button className="bg-indigo-700 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg shadow-[var(--shadow-indigo-md)] text-white heading-sp-b-text hover:bg-indigo-600 hover:scale-[1.02] hover:shadow-[var(--shadow-indigo-lg)] transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-gray-900">
                Read The Story
                <BookOpen size={18} />
              </button>
              <button className="backdrop-blur-[5px] bg-white/10 border border-indigo-400 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white heading-sp-b-text hover:bg-white/15 hover:scale-[1.02] hover:border-indigo-300 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-gray-900">
                Join The Coven
                <UserPlus size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-700/30 to-transparent my-8 sm:my-12"></div>

        {/* As Seen In The Valthakan Times Section */}
        <section className="bg-blue-gray-900/20 px-5 py-12 sm:py-16 md:py-20 md:px-8 xl:px-12 animate-fade-in">
          <div className="max-w-[var(--max-w-container-lg)] xl:max-w-[var(--max-w-container-2xl)] mx-auto flex flex-col gap-8 sm:gap-10">
            <div className="flex flex-col gap-2 items-start sm:items-center">
              <h2 className="heading-sp-h2 sm:text-4xl md:text-5xl xl:text-6xl text-white text-left sm:text-center">
                As Seen in <br className="hidden sm:block" />
                The Vantakan Time
              </h2>
              <p className="heading-sp-r-text text-blue-gray-200 text-left sm:text-center">
                Recently featured books, creators, and partners from our growing
                literary world.
              </p>
            </div>

            {/* Featured Books Grid */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="backdrop-blur-[2px] bg-blue-gray-900/50 border border-indigo-700/20 rounded-xl flex flex-col gap-2 grow items-center p-4 hover:bg-blue-gray-900/60 hover:border-indigo-700/30 hover:shadow-[var(--shadow-indigo-sm)] hover:-translate-y-1 transition-all cursor-pointer group">
                  <div className="relative h-[120px] rounded w-full overflow-hidden">
                    <Image
                      src="/images/about/partners/lmdodds.webp"
                      alt="L.M. Dodds author profile and book cover for Chronicles of Lim"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start w-full text-xs">
                    <p className="heading-sp-b-text text-blue-gray-100">
                      L.M. Dodds – Author & Attorney
                    </p>
                    <p className="text-xs-figma text-blue-gray-400">
                      Fantasy writer and attorney L.M. Dodds invites readers
                      into the romantic and perilous realm of Chronicles of Lim,
                      blending heart and heroism.
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.alexashays.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-[2px] bg-blue-gray-900/50 border border-indigo-700/20 rounded-xl flex flex-col gap-2 grow items-center p-4 hover:bg-blue-gray-900/60 hover:border-indigo-700/30 hover:shadow-[var(--shadow-indigo-sm)] hover:-translate-y-1 transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-gray-900/20"
                >
                  <div className="relative h-[120px] rounded w-full overflow-hidden">
                    <Image
                      src="/images/about/partners/shield.webp"
                      alt="Alexa Shay - The Shield Series book cover"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start w-full text-xs">
                    <span className="heading-sp-b-text text-blue-gray-100 group-hover:text-indigo-300 transition-colors">
                      Alexa Shay – Official Author Site
                    </span>
                    <p className="text-sm-figma text-blue-gray-400">
                      Explore the imaginative worlds of Alexa Shay — author of
                      The Shield Series — where mythology, courage, and destiny
                      intertwine.
                    </p>
                  </div>
                </a>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="backdrop-blur-[2px] bg-blue-gray-900/50 border border-indigo-700/20 rounded-xl flex flex-col gap-2 grow items-center p-4 hover:bg-blue-gray-900/60 hover:border-indigo-700/30 hover:shadow-[var(--shadow-indigo-sm)] hover:-translate-y-1 transition-all cursor-pointer group">
                  <div className="relative h-[120px] rounded w-full overflow-hidden">
                    <Image
                      src="/images/about/partners/The Darkest Night–Anna Chastek.webp"
                      alt="The Darkest Night poetry collection book cover by Anna Chastek"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start w-full text-xs">
                    <p className="heading-sp-b-text text-blue-gray-100">
                      The Darkest Night – Anna Chastek
                    </p>
                    <p className="text-sm-figma text-blue-gray-400">
                      A deeply personal poetry collection exploring loss,
                      reflection, and emotional recovery — where darkness gives
                      way to quiet resilience.
                    </p>
                  </div>
                </div>
                <div className="backdrop-blur-[2px] bg-blue-gray-900/50 border border-indigo-700/20 rounded-xl flex flex-col gap-2 grow items-center p-4 hover:bg-blue-gray-900/60 hover:border-indigo-700/30 hover:shadow-[var(--shadow-indigo-sm)] hover:-translate-y-1 transition-all cursor-pointer group">
                  <div className="relative h-[120px] rounded w-full overflow-hidden">
                    <Image
                      src="/images/about/partners/stillChosen.webp"
                      alt="Still Chosen: Another Unwanted Adventure book cover by Stephanie G. Olson"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start w-full text-xs">
                    <p className="heading-sp-b-text text-blue-gray-100">
                      Still Chosen: Another Unwanted Adventure – Stephanie G.
                      Olson
                    </p>
                    <p className="text-sm-figma text-blue-gray-400">
                      A witty and heartfelt fantasy sequel following
                      Phoebe&apos;s reluctant return as &quot;the chosen
                      one,&quot; balancing humor, danger, and divine purpose.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="backdrop-blur-[2px] bg-blue-gray-900/50 border border-indigo-700/20 rounded-xl flex flex-col gap-2 grow items-center p-4 hover:bg-blue-gray-900/60 hover:border-indigo-700/30 hover:shadow-[var(--shadow-indigo-sm)] hover:-translate-y-1 transition-all cursor-pointer group">
                  <div className="relative h-[120px] rounded w-full overflow-hidden">
                    <Image
                      src="/images/about/partners/engraved.webp"
                      alt="Engraved on a Heart of Flame book cover by Claire E. Jones"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start w-full text-xs">
                    <p className="heading-sp-b-text text-blue-gray-100">
                      Engraved on a Heart of Flame – Claire E. Jones
                    </p>
                    <p className="text-sm-figma text-blue-gray-400">
                      The third book in the Threads of Destiny series — a story
                      of love, defiance, and the burning power of choice in a
                      world of magic and prophecy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center">
              {[
                { name: "Money", file: "money.webp" },
                { name: "dub", file: "dub.webp" },
                { name: "1440", file: "1440.webp" },
                { name: "MOOD", file: "mood.webp" },
                { name: "+Babbel", file: "babbel.webp" },
                { name: "P4P", file: "p4p.webp" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="relative h-[140px] w-full sm:h-[160px] sm:w-[140px] md:h-[182px] md:w-[167px] bg-blue-gray-900 rounded-lg overflow-hidden flex items-center justify-center hover:brightness-110 transition-all cursor-pointer group"
                >
                  <Image
                    src={`/images/about/partners/${partner.file}`}
                    alt={`${partner.name} partner logo`}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advertise With The Valthakan Times Section */}
        <section className="bg-gradient-to-b from-blue-gray-900/20 to-blue-gray-900 px-5 sm:px-6 py-12 sm:py-16 md:py-20 md:px-8 xl:px-12 animate-fade-in">
          <div className="max-w-full sm:max-w-[var(--max-w-container-lg)] xl:max-w-[var(--max-w-container-xl)] mx-auto">
            <div className="backdrop-blur-[2px] bg-blue-gray-900/50 border border-indigo-700/30 rounded-2xl sm:rounded-3xl relative overflow-hidden">
              <div className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6 items-center">
                {/* Advertising Badge */}
                <div className="bg-indigo-700/20 flex gap-2 items-center px-3 sm:px-4 py-2 rounded-full">
                  <Megaphone
                    size={18}
                    className="sm:w-5 sm:h-5 text-indigo-500"
                  />
                  <p className="heading-sp-b-text text-indigo-500">
                    Advertising Opportunity
                  </p>
                </div>

                {/* Heading */}
                <h2 className="heading-sp-h2 sm:text-5xl md:text-6xl xl:heading-pc-h2 text-white text-center">
                  Advertise With <br className="hidden sm:block" />
                  The Valthakan Times
                </h2>

                {/* Description */}
                <p className="text-base-figma sm:text-lg-figma text-white text-center max-w-full sm:max-w-[var(--max-w-container-base)]">
                  Reach a dedicated community of literary and literature
                  enthusiasts. Partner with us to showcase your brand to readers
                  who are passionate about stories, magic, and adventure.
                </p>

                {/* Features */}
                <div className="flex flex-col gap-6 items-center max-w-[var(--max-w-container-base)] w-full pt-4">
                  {[
                    {
                      icon: Users,
                      text: "Engaged Literary Audience",
                    },
                    {
                      icon: TrendingUp,
                      text: "Targeted Reach & Visibility",
                    },
                    {
                      icon: Megaphone,
                      text: "Premium Brand Placement",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-3 items-center justify-center w-full"
                    >
                      <feature.icon
                        size={20}
                        className="text-yellow-400 shrink-0"
                      />
                      <p className="text-sm-figma text-white text-center">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full pt-6 sm:pt-8 justify-center">
                  <a
                    href="mailto:advertising@thevalthakantimes.com?subject=Advertising Inquiry"
                    className="bg-yellow-400 flex items-center justify-center gap-2 h-10 sm:h-11 px-6 sm:px-8 rounded-lg sm:rounded-[10px] shadow-yellow text-blue-gray-900 heading-sp-b-text hover:bg-yellow-500 hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-gray-900"
                  >
                    Partner With Us
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
