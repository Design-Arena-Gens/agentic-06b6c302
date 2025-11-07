import Image from "next/image";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCalendarCheck,
  FaTools,
  FaTruckMoving,
  FaPalette,
  FaCheckCircle
} from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const heroStats = [
  { value: "১৮+ বছর", label: "রিয়াদে লাক্সারি পর্দার অভিজ্ঞতা" },
  { value: "৪৫০০+", label: "হোম ও কমার্শিয়াল প্রজেক্ট সম্পন্ন" },
  { value: "২৪ ঘণ্টা", label: "প্রথম কলের মধ্যেই মেজারমেন্ট ভিজিট" }
];

const featureHighlights = [
  {
    icon: <FaCalendarCheck />,
    title: "একদিনেই মেজারমেন্ট",
    description: "আমাদের এক্সপার্ট টিম দ্রুত আপনার লোকেশনে এসে পর্দার সঠিক মাপ নিয়ে ডিজাইন কনসালটেশন প্রদান করে।"
  },
  {
    icon: <FaPalette />,
    title: "বহুমাত্রিক ডিজাইন ও ফেব্রিক",
    description: "প্রিমিয়াম সৌদি ও ইউরোপিয়ান ফেব্রিক লাইব্রেরি থেকে আপনার ইন্টিরিয়রের সঙ্গে মানানসই রঙ, টেক্সচার ও স্টাইল।"
  },
  {
    icon: <FaTools />,
    title: "প্রফেশনাল ইনস্টলেশন",
    description: "নিজস্ব প্রশিক্ষিত টিম নিরাপদ ও নিখুঁত ইনস্টলেশন নিশ্চিত করে, ১০০% ক্লিন-আপসহ।"
  },
  {
    icon: <FaTruckMoving />,
    title: "ফ্রি ডেলিভারি ও সেটআপ",
    description: "রিয়াদের যে কোনও এলাকায় দ্রুত ডেলিভারির পাশাপাশি সম্পূর্ণ সেটআপ আমরা করে দিই।"
  }
];

const collection = [
  {
    title: "মডার্ন ভেলভেট কালেকশন",
    description: "স্মার্ট হোম ও ভিলা ইন্টিরিয়রের জন্য সাউন্ড-ড্যাম্পিং ভেলভেট পর্দা, কাস্টম রঙে পাওয়া যায়।",
    image:
      "https://images.unsplash.com/photo-1616628182501-e2b645c9960d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "হোটেল গ্রেড ব্ল্যাকআউট",
    description: "৫-স্টার হোটেলের মানের ব্ল্যাকআউট ড্রেপ, সম্পূর্ণ নিরবচ্ছিন্ন ঘুমের অভিজ্ঞতার জন্য।",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "আরবিক মাশরাবিয়া টাচ",
    description: "ট্রেডিশনাল ডিজাইনকে আধুনিক ইন্টিরিয়রে তুলে ধরার জন্য আরবিক প্যাটার্নের সিল্ক মিশ্রণ।",
    image:
      "https://images.unsplash.com/photo-1600585154340-0ef3c08dcdb6?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "কার্পোরেট ও অফিস সলিউশন",
    description: "মিনিমাল ও ফায়ার-রিটারডেন্ট পর্দা, প্রতিটি মিটিং রুম ও অফিস স্পেসের জন্য কাস্টমাইজড।",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80"
  }
];

const testimonials = [
  {
    quote:
      "আমরা আমাদের নতুন ভিলার জন্য সম্পূর্ণ window treatment চাইছিলাম। প্রথম মেজারমেন্ট ভিজিট থেকে ইনস্টলেশন পর্যন্ত সবকিছু অত্যন্ত প্রফেশনাল। সময়মত ডেলিভারি এবং ফেব্রিকের কোয়ালিটি অসাধারণ।",
    author: "মাহের আল-সালেম",
    role: "আল-খুজামা, রিয়াদ"
  },
  {
    quote:
      "আমাদের হোটেলে yearly refresh এর জন্য কাজ করেছিলাম, তাদের কারিগরি দক্ষতা এবং detailing দেখে আমরা মুগ্ধ। প্রতিটি রুম tailor-made curtain solution পেয়েছে।",
    author: "সামিরা আল-নাসের",
    role: "হোটেল অপারেশন ম্যানেজার"
  },
  {
    quote:
      "গুগল অ্যাড দেখে কল করেছিলাম। একই দিনে টিম এসে measurements নিয়ে গিয়েছিল। দুই সপ্তাহের ভেতর সব উইন্ডোতে নতুন পর্দা লাগানো হয়েছে, customer service top-notch।",
    author: "মুহিবুল্লাহ খান",
    role: "ডিপ্লোমেটিক কোয়ার্টার, রিয়াদ"
  }
];

const sellingPoints = [
  "২৪/৭ বাংলা ও আরবি কাস্টমার সাপোর্ট",
  "হোম ভিজিটে ফেব্রিক স্যাম্পল এবং অর্ডার সাইনিং",
  "পেমেন্টের জন্য কাস্টমার ফ্রেন্ডলি অপশন (ক্যাশ, কার্ড, BNPL)",
  "এক বছর পর্যন্ত ওয়ারেন্টি ও রক্ষণাবেক্ষণ গ্যারান্টি"
];

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <article className="hero-text">
          <div className="tagline">
            <IoMdRibbon size={22} />
            সৌদি আরবে প্রিমিয়াম পর্দা এক্সপার্ট
          </div>
          <h1>রিয়াদে আপনার বাড়ির জন্য সিগনেচার কাস্টম পর্দা</h1>
          <p>
            লাক্সারি ভিলা, অ্যাপার্টমেন্ট বা কারিগরি প্রকল্প — প্রতিটি স্পেসের জন্য আমরা মেজারমেন্ট থেকে ইনস্টলেশন
            পর্যন্ত সম্পূর্ণ সমাধান দিই। পেতে পারেন ব্ল্যাকআউট, শিয়ার, লেয়ার্ড শেড, স্মার্ট ড্রাপারি এবং আরো অনেক
            সলিউশন।
          </p>
          <div className="cta-group">
            <a className="button" href="tel:+966558877441">
              <FaPhoneAlt /> এখনই কথা বলুন
            </a>
            <a className="cta-secondary" href="https://wa.me/966558877441" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp পরামর্শ
            </a>
          </div>
        </article>
        <aside className="hero-image">
          <div className="hero-card">
            <div className="image-frame">
              <Image
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80"
                alt="Premium curtains installed in a Riyadh luxury living room"
                fill
                sizes="(max-width: 600px) 100vw, 480px"
                priority
              />
            </div>
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="stat">
                  <h3>{stat.value}</h3>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="container">
        <div className="section-heading">
          <h2>কেন আমাদের পর্দা সার্ভিস রিয়াদে সবচেয়ে নির্ভরযোগ্য</h2>
          <p>প্রতিটি অর্ডারে কাস্টম টাচ, স্বচ্ছ মূল্য এবং দ্রুত সার্ভিস — গ্যারান্টিসহ।</p>
        </div>
        <div className="features-grid">
          {featureHighlights.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container spotlight">
        <div className="image-frame">
          <Image
            src="https://images.unsplash.com/photo-1595526114035-0d45ed20dccf?auto=format&fit=crop&w=900&q=80"
            alt="Curtain designer consulting with a client"
            fill
            sizes="(max-width: 900px) 100vw, 420px"
          />
        </div>
        <div className="spotlight-text">
          <h3>সৌদি লাক্সারি লাইফস্টাইলে মানানসই টেইলার্ড অভিজ্ঞতা</h3>
          <p>
            আমাদের ইন-হাউস ডিজাইনারদের সাথে পরামর্শ করে যা ডিজাইন চয়ন করবেন তা আমরা 3D Preview এর মাধ্যমে আগে দেখিয়ে
            দিই। প্রতিটি ফেব্রিক মধ্যপ্রাচ্যের আবহাওয়া বিবেচনায় কন্ডিশনড স্টোরেজে রাখা হয় এবং ইনস্টলেশনের আগে
            কেয়ারফুলি প্রিপেয়ার করা হয়।
          </p>
          <ul className="spotlight-list">
            {sellingPoints.map((point) => (
              <li key={point}>
                <FaCheckCircle size={18} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="section-heading">
          <h2>সিগনেচার কালেকশন</h2>
          <p>রিয়াদের আবহাওয়া ও ইন্টিরিয়র এসথেটিক্সের জন্য কিউরেটেড ফেব্রিক ও ফিনিশ।</p>
        </div>
        <div className="collection-grid">
          {collection.map((item) => (
            <article key={item.title} className="collection-card">
              <div className="image-frame">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 260px" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-heading">
          <h2>রিয়ালের ক্লায়েন্টদের ভালোবাসা</h2>
          <p>আমাদের প্রতি বিশ্বাস রাখছেন ভিলা ও পেন্টহাউস মালিক, হোটেল এবং কর্পোরেট ইন্টিরিয়র প্রকল্প।</p>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card">
              <MdOutlineWorkspacePremium size={28} color="#a9714b" />
              <p>“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span className="muted">{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container contact-card">
        <div>
          <h2>এখনই বিনামূল্যে কনসালটেশন বুক করুন</h2>
          <p>
            আপনার গুগল অ্যাড থেকে আসা প্রতিটি ক্লিক যেন এখানে ফোন কলে রূপান্তরিত হয়। নিচের যে কোনও চ্যানেলে আমাদের
            সাথে যোগাযোগ করলেই ২৪ ঘণ্টার মধ্যে প্রিমিয়াম কনসালটেশন পাবেন।
          </p>
          <a className="button" href="tel:+966558877441">
            <FaPhoneAlt /> কল করুন: +966 55 887 7441
          </a>
        </div>
        <div className="contact-details">
          <a className="contact-link" href="https://wa.me/966558877441" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp লাইভ সাপোর্ট
          </a>
          <a className="contact-link" href="tel:+966558877441">
            <FaPhoneAlt /> ২৪/৭ হটলাইন
          </a>
          <p className="muted" style={{ color: "rgba(255,255,255,0.75)" }}>
            শোরুম ভিজিট: গেট ৫, আল ইয়াসমিন, রিয়াদ
          </p>
        </div>
      </section>

      <footer className="footer container">
        © {new Date().getFullYear()} Riyadh Luxury Curtains. All Rights Reserved.
      </footer>
    </main>
  );
}
