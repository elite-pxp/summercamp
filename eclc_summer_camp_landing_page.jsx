import { useMemo, useState } from "react";

export default function ECLCSummerCampLandingPage() {
  const austellLink = "https://schools.procareconnect.com/form/1b671d16-c3a3-4db9-8944-ab5bf18a4964";
  const mabletonLink = "https://schools.procareconnect.com/form/f422dd04-cc44-4906-a7e3-46dbd0f83177";
  const calendlyLink = "https://calendly.com/aadmin-eliteschildren/30min";
  const ebookDownloadLink = "#kids-wealth-book-download";
  const assetBase = "https://cdn.jsdelivr.net/gh/juniper1947/global-image-library@main/docs/uploads/2026-04-eclc-summer-camp-assets";
  const heroBackground = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776976287/global-image-library/new_web_cover_dkb6cx.png";
  const mobileHeroBackground = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776971880/global-image-library/Mobile_2160_x_700_px_okjo38.png?v=1776971880";
  const logoShield = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776955821/global-image-library/Elite_Logo_Transpatent_wlro3b.png";
  const sectionBackground = `${assetBase}/05-section-background-from-board.png`;
  const iconMoneyBag = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776968200/global-image-library/9_j8ifg2.png";
  const iconCapBooks = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776968203/global-image-library/10_jrsosd.png";
  const iconPiggy = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776968206/global-image-library/11_epqxc1.png";
  const headingInlineIcon = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776968212/global-image-library/12_kjtmh4.png";
  const listBulletIcon = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776967284/global-image-library/Website_Icon_Logo_GHL_cl2gpf.png";
  const parentInsightIcon = "https://res.cloudinary.com/dozcy2jve/image/upload/v1776967284/global-image-library/Website_Icon_Logo_GHL_cl2gpf.png";
  const buttonAnimationClass = "transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:-rotate-1 active:scale-95";
  const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" };

  const [downloadForm, setDownloadForm] = useState({
    parentName: "",
    email: "",
    childAge: "",
  });
  const isDownloadReady = useMemo(
    () => Object.values(downloadForm).every((value) => value.trim().length > 0),
    [downloadForm],
  );

  const handleDownloadSubmit = (event) => {
    event.preventDefault();
    if (!isDownloadReady || !ebookDownloadLink.startsWith("http")) {
      return;
    }

    const link = document.createElement("a");
    link.href = ebookDownloadLink;
    link.download = "kids-wealth-book";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    "Real-life money learning through play",
    "Experience jobs and mini businesses",
    "Practice real-world spending and choices",
    "Learn saving and growing money",
    "Build confidence and leadership skills",
    "Engaging sports and movement-based activities",
    "Structured reading time to strengthen literacy skills",
    "Summer Bridge review to reinforce academic progress",
    "Fun themed days and water days",
  ];

  const outcomes = [
    "Understand the value of earning money through effort",
    "Learn how to save with purpose",
    "Make smarter spending choices",
    "Be introduced to basic investing concepts",
    "Develop confidence, independence, and discipline",
  ];

  const growthAreas = [
    "Sports and active play sessions",
    "Daily reading to build strong habits",
    "Summer Bridge review to keep academic skills sharp",
    "Appreciation for the effort behind what parents provide",
    "Thoughtful decision-making",
    "Patience, planning, and responsibility",
  ];

  return (
    <div className="mx-auto min-h-screen w-[768px] overflow-hidden bg-[#f7f3e8] pb-24 text-[#21310f] md:w-[1366px] md:pb-0">
      <header className="relative z-30 border-b border-[#2d4306] bg-[#243504] px-4 py-3 text-white sm:px-6 md:px-10">
        <div className="mx-auto flex max-w-none items-center gap-3">
          <img src={logoShield} alt="ECLC logo" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />
          <div className="text-xs font-black uppercase tracking-wide sm:text-sm">Elite Children Learning Center</div>
        </div>
      </header>

      <section className="relative h-[249px] overflow-hidden md:h-[768px]">
        <picture className="absolute inset-0">
          <source media="(max-width: 640px)" srcSet={mobileHeroBackground} />
          <img src={heroBackground} alt="Summer Camp 2026 hero" className="h-full w-full object-cover object-center" />
        </picture>

        <div className="relative mx-auto flex h-full max-w-none flex-col justify-end px-4 py-5 sm:px-6 md:px-10">
          <div className="mb-4 flex flex-wrap gap-3 sm:mb-6 md:justify-center">
            <a href={austellLink} className={`rounded-2xl bg-[#6b8310] px-6 py-3 text-center text-sm font-extrabold text-white shadow-xl hover:bg-[#55680c] sm:px-7 sm:py-4 sm:text-lg md:px-9 md:py-5 md:text-xl ${buttonAnimationClass}`} {...externalLinkProps}>
              Register Austell
            </a>
            <a href={mabletonLink} className={`rounded-2xl bg-[#243504] px-6 py-3 text-center text-sm font-extrabold text-white shadow-xl hover:bg-[#182202] sm:px-7 sm:py-4 sm:text-lg md:px-9 md:py-5 md:text-xl ${buttonAnimationClass}`} {...externalLinkProps}>
              Register Mableton
            </a>
            <a href={calendlyLink} className={`rounded-2xl border-2 border-white bg-white/90 px-6 py-3 text-center text-sm font-extrabold text-[#243504] shadow-lg sm:px-7 sm:py-4 sm:text-lg md:px-9 md:py-5 md:text-xl ${buttonAnimationClass}`} {...externalLinkProps}>
              Book a Tour
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-8 sm:py-10"
        style={{
          backgroundImage: `url(${sectionBackground})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontFamily: '"Trebuchet MS", "Comic Sans MS", "Segoe UI", sans-serif',
        }}
      >
        <div className="absolute inset-0 bg-[#f7f3e8]/85" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid items-stretch gap-4 md:grid-cols-3">
            <article className="h-full rounded-3xl border-2 border-[#d7dcc4] bg-white p-5 shadow-lg sm:p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                  <img src={iconMoneyBag} alt="Weekly rate icon" className="h-12 w-12 rounded-xl object-contain" />
                  <h3 className="text-xl font-black uppercase tracking-wide text-[#6f831f] sm:text-2xl">Weekly Rate</h3>
                </div>
                <p className="ml-1 text-4xl font-black leading-[0.9] tracking-[-0.02em] text-[#243504] sm:text-5xl">$175</p>
              </div>
              <div className="mt-3 space-y-1 text-center text-lg font-semibold text-[#243504] sm:text-xl">
                <p>Flexible weekly enrollment</p>
                <p>Hands-on activities included</p>
              </div>
            </article>

            <article className="h-full rounded-3xl border-2 border-[#d7dcc4] bg-white p-5 shadow-lg sm:p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-4">
                  <img src={iconCapBooks} alt="Age group icon" className="h-12 w-12 rounded-xl object-contain" />
                  <h3 className="text-xl font-black uppercase tracking-wide text-[#6f831f] sm:text-2xl">Age Group</h3>
                </div>
                <p className="ml-1 text-4xl font-black leading-[0.9] tracking-[-0.02em] text-[#243504] sm:text-5xl">5+</p>
              </div>
              <p className="mt-2 text-center text-xl font-bold text-[#243504] sm:text-2xl">Kindergarten and up</p>
              <div className="mt-3 space-y-1 text-center text-lg font-semibold text-[#243504] sm:text-xl">
                <p>Beginner-friendly money lessons</p>
                <p>Age-appropriate group activities</p>
              </div>
            </article>

            <article className="h-full rounded-3xl border-2 border-[#d7dcc4] bg-gradient-to-br from-[#fff8d7] to-[#f4d85d] p-5 shadow-lg sm:p-6">
              <div className="flex items-center justify-center gap-4">
                <img src={iconPiggy} alt="Special offer icon" className="h-12 w-12 rounded-xl object-contain" />
                <h3 className="text-xl font-black uppercase tracking-wide text-[#6f831f] sm:text-2xl">Special Offer</h3>
              </div>
              <p className="mt-3 text-center text-lg font-bold leading-[1.35] text-[#243504] sm:text-xl">Free registration refund or account credit after 4 full weeks of attendance.</p>
              <p className="mx-auto mt-3 flex w-fit animate-pulse rounded-full bg-[#243504] px-4 py-2 text-lg font-black text-white sm:text-xl">Use Code: ELITE75</p>
              <p className="mx-auto mt-2 w-fit rounded-md border border-[#d04242] bg-[#fff1f1] px-2 py-1 text-xs italic font-semibold text-[#b71c1c] sm:text-sm">Best for families planning a full-month schedule.</p>
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] border-2 border-[#cfd8bb] bg-[#f7f6f1] p-6 shadow-lg sm:p-8">
            <h2 className="flex items-center gap-3 text-3xl font-black leading-tight text-[#243504] sm:text-4xl">
              <img src={headingInlineIcon} alt="" className="h-[1em] w-[1em] object-contain" />
              More Than a Summer Camp, A Life Advantage
            </h2>
            <p className="mt-4 text-base leading-7 text-[#33481a] sm:text-lg sm:leading-8">
              This summer, give your child more than fun. Give them practical life skills that many adults wish they had learned earlier. At Elite Children Learning Center Summer Camp 2026, children learn how money works through hands-on experiences that help build confidence, responsibility, and smart decision-making.
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-[#cfd8bb] bg-[#f2f4ea] p-5 sm:p-6">
                <h3 className="flex items-center gap-3 text-xl font-black text-[#5f7615] sm:text-2xl">
                  <img src={iconCapBooks} alt="" className="h-9 w-9 rounded-lg object-contain" />
                  What Your Child Will Gain
                </h3>
                <p className="mt-3 text-base leading-7 text-[#33481a] sm:text-lg sm:leading-8">
                  By the end of the program, your child will begin to understand the value of earning money through effort, saving with purpose, making thoughtful spending choices, and being introduced to simple investing ideas. Along the way, they also build confidence, independence, and discipline.
                </p>
              </article>

              <aside className="rounded-3xl border border-[#cfd8bb] bg-[#e9edd8] p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#5f7615]">
                  <img src={parentInsightIcon} alt="" className="h-[1.05em] w-[1.05em] object-contain" />
                  Parent Insight
                </div>
                <p className="mt-3 text-base leading-7 text-[#33481a] sm:text-lg sm:leading-8">
                  The habits your child builds today can shape their future. This program helps children appreciate the effort behind what their parents provide, understand the importance of thoughtful decisions, and develop patience, planning, and responsibility in everyday life.
                </p>
              </aside>
            </div>

            <article className="mt-5 rounded-3xl border border-[#cfd8bb] bg-[#efe8c5] p-5 sm:p-6">
              <h3 className="flex items-center gap-3 text-xl font-black text-[#5f7615] sm:text-2xl">
                <img src={iconMoneyBag} alt="" className="h-9 w-9 rounded-lg object-contain" />
                A Well-Rounded Program and Life Mindset
              </h3>
              <p className="mt-3 text-base leading-7 text-[#33481a] sm:text-lg sm:leading-8">
                Our summer camp goes beyond financial lessons. Children also enjoy sports and active play, daily reading time, and Summer Bridge review to help keep academic skills strong during the break. This creates a balanced experience that supports both personal growth and school readiness.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Sports and active play sessions",
                  "Daily reading to build strong habits",
                  "Summer Bridge review to keep academic skills sharp",
                  "Real-life money lessons",
                  "Confidence and leadership building",
                  "Thoughtful decision-making",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-2xl border border-[#d9decc] bg-[#f8f6ee] px-4 py-3 text-sm font-bold text-[#304519] sm:text-base">
                    <img src={listBulletIcon} alt="" className="mt-0.5 h-4 w-4 object-contain" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="mt-6 rounded-2xl bg-[#1f3600] px-5 py-4 text-center text-sm font-extrabold text-[#ead268] sm:text-base">
              Little Learners Wealth Institute helps children earn, save, and invest through age-appropriate learning in a fun summer camp setting.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f3a00] py-12 text-white sm:py-14">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-2xl font-black sm:text-4xl">By the end of the program, your child will:</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item} className="rounded-3xl bg-[#41581f] p-5">
                <p className="text-base font-bold leading-7 text-[#e8eedc] sm:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ece9de] py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#e7e3d1] p-6 shadow-lg sm:p-8">
            <h3 className="text-2xl font-black leading-tight text-[#6f831f] sm:text-3xl">
              The habits your child builds today will shape their future.
            </h3>
            <p className="mt-5 text-base leading-7 text-[#33481a] sm:text-lg sm:leading-8">
              This camp goes beyond financial lessons and supports overall growth in school and life.
            </p>
            <div className="mt-8 rounded-3xl bg-white p-6 shadow">
              <div className="text-sm font-bold uppercase tracking-wide text-[#6f831f]">Contact</div>
              <div className="mt-3 text-lg font-bold text-[#243504]">678-403-1432</div>
              <div className="text-lg font-bold text-[#243504]">aadmin@eliteschildren.com</div>
            </div>
          </div>

          <div className="rounded-[2rem] border-4 border-[#6f831f] bg-[#e6cf63] p-6 shadow-lg sm:p-8">
            <h3 className="text-2xl font-black text-[#6f831f] sm:text-3xl">A well-rounded program and life mindset</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {growthAreas.map((item) => (
                <div key={item} className="rounded-2xl bg-white/70 p-4">
                  <p className="text-base font-bold leading-7 text-[#33481a] sm:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-16">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url(${sectionBackground})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex rounded-full bg-[#f0c83b] px-4 py-2 text-sm font-black uppercase text-[#243504]">Program Details</div>
              <h2 className="mt-4 text-2xl font-black text-[#243504] sm:text-4xl">Summer Camp at a glance</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#33481a] sm:text-lg sm:leading-8">
              Designed for kindergarten and school-aged children, this summer experience blends literacy, movement, academic review, and hands-on money learning.
            </p>
          </div>

          <div className="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-[#d7dcc4] bg-white/90 p-6 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-wide text-[#6f831f]">Price</div>
              <div className="mt-2 text-2xl font-black text-[#243504] sm:text-3xl">$175/week</div>
            </div>
            <div className="rounded-3xl border border-[#d7dcc4] bg-white/90 p-6 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-wide text-[#6f831f]">Eligibility</div>
              <div className="mt-2 text-2xl font-black text-[#243504] sm:text-3xl">Age 5+</div>
            </div>
            <div className="rounded-3xl border border-[#d7dcc4] bg-white/90 p-6 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-wide text-[#6f831f]">Offer</div>
              <div className="mt-2 text-xl font-black text-[#243504] sm:text-2xl">Use code ELITE75</div>
              <p className="mt-2 text-sm leading-6 text-[#33481a]">Free registration refund or credit after 4 weeks of attendance.</p>
            </div>
            <div className="rounded-3xl border border-[#d7dcc4] bg-white/90 p-6 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-wide text-[#6f831f]">Spots</div>
              <div className="mt-2 text-2xl font-black text-[#243504] sm:text-3xl">Limited</div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-3xl bg-[#f7f3e8]/95 p-5 shadow-sm">
                <p className="text-base font-bold leading-7 text-[#243504] sm:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f3a00] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#41581f] p-6 shadow-xl sm:p-8">
              <div className="text-sm font-bold uppercase tracking-wide text-[#ead268]">Location 1</div>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">Austell Registration</h3>
              <p className="mt-4 text-base leading-7 text-[#e8eedc] sm:text-lg sm:leading-8">
                Send families directly to the Austell registration form or enrollment page.
              </p>
              <a href={austellLink} className={`mt-6 inline-flex w-full justify-center rounded-2xl bg-[#f0c83b] px-6 py-4 text-base font-extrabold text-[#243504] shadow-lg sm:w-auto sm:text-lg ${buttonAnimationClass}`} {...externalLinkProps}>
                Register for Austell
              </a>
            </div>

            <div className="rounded-[2rem] bg-[#41581f] p-6 shadow-xl sm:p-8">
              <div className="text-sm font-bold uppercase tracking-wide text-[#ead268]">Location 2</div>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">Mableton Registration</h3>
              <p className="mt-4 text-base leading-7 text-[#e8eedc] sm:text-lg sm:leading-8">
                Send families directly to the Mableton registration form or enrollment page.
              </p>
              <a href={mabletonLink} className={`mt-6 inline-flex w-full justify-center rounded-2xl bg-[#f0c83b] px-6 py-4 text-base font-extrabold text-[#243504] shadow-lg sm:w-auto sm:text-lg ${buttonAnimationClass}`} {...externalLinkProps}>
                Register for Mableton
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ece9de] py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:px-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-[#f4f4f1] p-6 shadow-xl sm:p-8">
            <div className="text-sm font-bold uppercase tracking-wide text-[#6f831f]">Book a Tour</div>
            <h2 className="mt-3 text-2xl font-black text-[#243504] sm:text-3xl">Visit before you register</h2>
            <p className="mt-3 text-base leading-6 text-[#33481a] sm:text-lg sm:leading-7">
              Book directly below to reserve a tour, ask questions, and feel confident before enrolling.
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border-2 border-[#d7dcc4] bg-[#f7f3e8]">
              <iframe
                title="ECLC Live Scheduler"
                src={`${calendlyLink}?hide_event_type_details=1&hide_gdpr_banner=1`}
                className="h-[360px] w-full"
                frameBorder="0"
              />
            </div>
          </div>

          <div id="kids-wealth-book-form" className="rounded-[2rem] bg-[#e6cf63] p-6 shadow-xl sm:p-8">
            <div className="text-sm font-bold uppercase tracking-wide text-[#6f831f]">Free Download</div>
            <h2 className="mt-3 text-2xl font-black text-[#243504] sm:text-3xl">Kids Wealth Book</h2>
            <p className="mt-4 text-base leading-7 text-[#33481a] sm:text-lg sm:leading-8">
              Use this section to connect an email capture form. After submission, parents can receive the free booklet and continue into your follow-up sequence.
            </p>

            <form className="mt-6 grid gap-4" onSubmit={handleDownloadSubmit}>
              <input
                value={downloadForm.parentName}
                onChange={(event) => setDownloadForm((current) => ({ ...current, parentName: event.target.value }))}
                required
                className="rounded-2xl border border-[#c6b14e] bg-[#e9d96f] px-5 py-4 text-base text-[#3e4f1b] outline-none ring-0 placeholder:text-[#6f764a]"
                placeholder="Parent name"
              />
              <input
                type="email"
                value={downloadForm.email}
                onChange={(event) => setDownloadForm((current) => ({ ...current, email: event.target.value }))}
                required
                className="rounded-2xl border border-[#c6b14e] bg-[#e9d96f] px-5 py-4 text-base text-[#3e4f1b] outline-none ring-0 placeholder:text-[#6f764a]"
                placeholder="Email address"
              />
              <input
                value={downloadForm.childAge}
                onChange={(event) => setDownloadForm((current) => ({ ...current, childAge: event.target.value }))}
                required
                className="rounded-2xl border border-[#c6b14e] bg-[#e9d96f] px-5 py-4 text-base text-[#3e4f1b] outline-none ring-0 placeholder:text-[#6f764a]"
                placeholder="Child age"
              />
              <button
                type="submit"
                disabled={!isDownloadReady}
                className={`w-full rounded-2xl bg-[#1f3600] px-6 py-4 text-base font-extrabold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg ${buttonAnimationClass}`}
              >
                Get the Free Book
              </button>
            </form>
          </div>
        </div>

      </section>

      <section className="relative overflow-hidden bg-[#1f3a00] py-12 text-white sm:py-16">
        <div className="relative mx-auto max-w-6xl px-6 text-center md:px-10">
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">Spots are limited</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#e8eedc] sm:text-lg sm:leading-8">
            Give your child more than a summer camp. Give them a life advantage through real-life money skills, literacy support, movement, and confidence-building experiences.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a href={austellLink} className={`w-full rounded-2xl bg-[#f0c83b] px-7 py-4 text-base font-extrabold text-[#243504] shadow-xl sm:w-auto sm:text-lg ${buttonAnimationClass}`} {...externalLinkProps}>
              Register Austell
            </a>
            <a href={mabletonLink} className={`w-full rounded-2xl bg-[#41581f] px-7 py-4 text-base font-extrabold text-white shadow-xl sm:w-auto sm:text-lg ${buttonAnimationClass}`} {...externalLinkProps}>
              Register Mableton
            </a>
            <a href={calendlyLink} className={`w-full rounded-2xl border-2 border-[#e8eedc] bg-transparent px-7 py-4 text-base font-extrabold text-[#e8eedc] shadow-xl sm:w-auto sm:text-lg ${buttonAnimationClass}`} {...externalLinkProps}>
              Book a Tour
            </a>
          </div>
        </div>
      </section>

      <footer className="overflow-hidden rounded-b-2xl border border-t-0 border-[#2b3c08] bg-[#162701] text-white">
        <div className="h-2 bg-[#6f8917]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 md:flex-row md:items-center md:justify-between md:px-8 md:py-3">
          <div>
            <div className="text-base font-black leading-tight md:text-lg">Elite Children Learning Center</div>
            <div className="mt-0.5 text-xs text-white/80 md:text-sm">Summer Camp 2026 | Little Learners Wealth Institute</div>
          </div>
          <div className="break-words text-xs text-white/80 md:text-sm md:text-right">Phone: 678-403-1432 | Email: aadmin@eliteschildren.com</div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#d8dcc5] bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a href={austellLink} className={`rounded-xl bg-[#6b8310] px-3 py-3 text-center text-sm font-extrabold text-white ${buttonAnimationClass}`} {...externalLinkProps}>
            Austell
          </a>
          <a href={mabletonLink} className={`rounded-xl bg-[#243504] px-3 py-3 text-center text-sm font-extrabold text-white ${buttonAnimationClass}`} {...externalLinkProps}>
            Mableton
          </a>
          <a href={calendlyLink} className={`rounded-xl bg-[#f0c83b] px-3 py-3 text-center text-sm font-extrabold text-[#243504] ${buttonAnimationClass}`} {...externalLinkProps}>
            Tour
          </a>
        </div>
      </div>
    </div>
  );
}
