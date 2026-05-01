import { Link } from 'react-router-dom'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useContent } from '../hooks/useContent'

const defaults = {
  hero: {
    badge: 'About',
    title: "You are here because you know the real work of leadership isn’t in another framework.",
    subtitle: "It’s in understanding, and integrating, the human being behind the leader.",
    closing: 'This is who Gowtham is, what shaped him, and why this work exists.',
    image: '/images/about/gb-profile.png',
  },
  founder: {
    label: 'The Founder',
    name: 'Gowtham Balaji',
    role: 'Founder, The Leadership Tattva',
    portrait: '/images/about/coaching-1.jpg',
    chapters: [
      {
        label: 'The Fragmentation',
        paragraphs: [
          'Gowtham spent years in corporate leadership, leading operations, strategy, and teams. He made solid decisions when there was time. He was articulate in low-stakes meetings. He could lead in calm.',
          "But when real pressure hit, scrutiny, crisis decisions, high-stakes presentations, something broke. His body would tighten. His mind would blank. His presence would collapse. <strong>He was succeeding on paper and fragmenting inside.</strong> The pressure seeped into his relationships, his health, his sense of self.",
          'Thoughts and questions about the sustainable ways of living a meaningful life emerged. The answers were not to be found inside the city life.',
        ],
      },
      {
        label: 'The Search',
        paragraphs: [
          'He left corporate life, built a farm in Tiruvannamalai, lived off-grid and pursued home schooling and natural farming. Continuous questions, learning and exposure to wisdom of the land showed glimpses of what is a purposeful path of life. Not one tradition, but many, yoga therapy, somatic work, energy healing, Advaita Vedanta, the Yoga Sutras, depth psychology, neuroscience.',
          'He trained under teachers (given below) who carried these traditions with rigour, not as weekend retreats, but as lived practice.',
        ],
        image: '/images/about/gowtham.jpg',
        imageCaption: 'On the porch, the slow, quiet years of inquiry away from the city.',
      },
      {
        label: 'What Changed',
        paragraphs: [
          "His regular practice was designed to address each layer, body, energy, mind, judgment, identity and life purpose. Finding it difficult to be consistent initially, with minimum effort everyday and with the right mentors and community around him, slowly things started shifting.",
        ],
        practiceLabel: "What the practice produced",
        practiceItems: [
          'His body stopped betraying him under scrutiny. Grounded posture, steady breath became the default, not the effort.',
          'His mind stayed clear under pressure. No blanking, no over-explaining, no freezing.',
          'His decisions became grounded in judgment, not reaction. Conviction replaced people-pleasing.',
          'Pressure started making him calmer, sharper, more intuitive, not less.',
          'His relationships, health, and sense of purpose realigned. Integration spread beyond leadership into every domain of life.',
        ],
        image: '/images/about/with-wife.jpg',
        imageCaption: 'Integration that spread beyond leadership, into family, health, and sense of self.',
      },
      {
        label: 'The Work Now',
        paragraphs: [
          'When Gowtham brought this integrated methodology to senior leaders, CXOs, Founders, VPs from companies like Google, Amazon, Barclays, and Apollo Hospitals, the same shifts appeared. Leaders who had tried five executive coaches and found none that stuck began reporting permanent changes within weeks. And this was his inner voice when he first discovered this in late 2010s:',
        ],
        image: '/images/about/cohort-zoom.png',
        imageCaption: 'A glimpse of the cohort work, leaders showing up across geographies.',
        quote: 'If I can do it, every leader can do it. Every leader deserves an uncompromising, honourable and joyful life.',
      },
      {
        label: 'Where the Work Happens',
        paragraphs: [
          'From his home in Chennai or the farm in Tiruvannamalai, Tamil Nadu, far from the noise. Sessions begin at 5:30 AM. The environment is intentional.',
        ],
        image: '/images/about/with-cow.jpg',
        imageCaption: 'The farm in Tiruvannamalai, intentional environment, intentional work.',
      },
    ],
  },
  threeDepths: {
    label: 'The Experience',
    title: 'Three Depths of Work',
    intro: "Leadership challenges don’t all live at the same depth. After 7+ years and over 3000+ hours of coaching with leaders, one thing is clear, the intervention has to match the readiness of the person, and the depth of the challenge. The work happens at three distinct registers, each demanding a different kind of entry and a different order of truth-telling.",
    depths: [
      {
        number: '01',
        audience: 'CXOs and CEOs, Identity, Purpose and the Inner Game of Leadership',
        tagline: 'When the title is won, but the leader behind it is still fragmenting.',
        body: "The leaders who come here have already proven themselves. Track records, teams, P&L ownership, boards to answer to. What brings them is not a skill gap. It’s something harder to name. At this level the real work is not about what you do. It’s about who you are, as a leader, as a person, at your core. The work is on purpose-driven leadership: what they actually stand for, not what their job description says. On authentic presence, showing up as the same person in a board room, a one-on-one, and a moment of personal crisis. On emotional intelligence not as a competency to polish, but as a capacity to genuinely feel, process, and lead from. The identity work at this level is irreversible. Once a leader knows who they actually are, not who they’ve been performing, everything else reorganises around that.",
        stat: '1,500+ hours of direct 1:1 work at this level.',
      },
      {
        number: '02',
        audience: "VPs, Directors and Senior Leaders, Showing Up. Speaking Up. Taking the Space You’ve Earned.",
        tagline: "The capability is there. The voice isn’t making it into the room.",
        body: "These leaders are not struggling with competence. What’s fragmenting is the gap between who they are when alone, clear, capable, certain, and who shows up when authority walks into the room or the stakes rise. Something softens. The point gets hedged. Someone else says it. Gets the credit. They walk out knowing it wasn’t ability. It was something else, unable to articulate it. We work with VPs, Directors and Senior Leaders on exactly this, the self-awareness work of understanding why they shrink, and the transformation work of building a new pattern. One where they show up fully, speak directly, claim the authority they have already earned, and stop waiting for a permission that no one is ever going to give them.",
        stat: '10,000+ leaders trained. 120+ senior leaders coached 1:1.',
      },
      {
        number: '03',
        audience: 'For Leaders Who Are Searching, The Deeper Question: Who Am I? What Is This Life For?',
        tagline: "Not every leader is here for this. But some can’t not be.",
        body: "There are leaders who arrive with a professional challenge, and something much older underneath it. They’ve achieved. They’ve led. They’ve built things. And somewhere in the middle of a successful decade, a question surfaced that no title can answer: Who am I, really? What is this all for? This is not a crisis. It is a calling. Gowtham is trained in the Indic wisdom tradition at a serious level, Yoga philosophy, Sankhya, the Mahabharata, and Advaita Vedanta. Not as academic knowledge to be quoted. As living frameworks for understanding the self, the nature of identity, and what it means to lead from a ground that doesn’t shift. For leaders who are genuinely searching, not performing spirituality, but actually asking, this layer of work offers what no behavioural framework can.",
        stat: 'Practitioner with background in Yoga · Sankhya · Mahabharata · Advaita Vedanta.',
      },
    ],
  },
  credentials: {
    label: 'Background',
    title: 'What the Work Is Built On',
    intro: 'The modalities below are not the work. They are in service of the work, which is always integration at the level that serves the leader in front of us.',
    items: [
      { title: 'Coaching and Leadership', text: 'ICF-accredited coaching. Trained in adult development, leadership psychology, and transformational coaching methodology. 15+ years working in and with corporate leadership environments.' },
      { title: 'Somatic and Body Work', text: 'Certified Yoga Teacher. Trained in somatic experiencing, breathwork, and body-based practice.' },
      { title: 'Energy Work', text: 'Reiki Master. Practical energy work for leaders navigating depletion, chronic activation, and the particular exhaustion of sustained high-pressure leadership.' },
      { title: 'Depth Psychology', text: 'Informed in behavioural sciences, fundamentals of psychology, Jungian psychology, and shadow work. For patterns that surface coaching cannot reach, we go to the source.' },
      { title: 'Indic Philosophical Training', text: 'Deep study of Advaita Vedanta, Yoga Sutras, Sankhya, and the Mahabharata, as living frameworks, not historical reference. Integration is existential, not merely psychological.' },
    ],
  },
  lineage: {
    label: 'Gratitude',
    title: 'Grateful to My Gurus, Teachers and Mentors',
    subtitle: 'This work stands on the shoulders of teachers and traditions. What is offered here belongs to a lineage far older and deeper than any one person.',
    spiritualHeading: 'The Spiritual Ground',
    spiritual: [
      { name: 'Ramana Maharishi', tradition: 'Advaita Vedanta', text: 'The silent teacher of Arunachala whose enquiry, Who am I?, is the foundation beneath everything.', photo: '/images/gurus/ramana-maharishi.jpeg' },
      { name: 'Yogi Ramsuratkumar', tradition: 'The Divine Beggar of Tiruvannamalai', text: 'Whose radical surrender and joy showed what an integrated life actually looks like.', photo: '/images/gurus/yogi-ramsuratkumar.jpeg' },
      { name: 'Arunachala, Tiruvannamalai', tradition: 'The Sacred Mountain', text: 'The farm, the sessions, the silence, all of it in the presence of this ground.', photo: '/images/gurus/arunachala.jpeg' },
    ],
    teachersHeading: 'Teachers and Mentors',
    teachers: [
      { name: 'Shri. Raghu Anantanarayanan', tradition: 'Yoga and Leadership, Ritambhara', text: 'The teacher who showed how Yoga philosophy is not separate from life or leadership, it is its deepest grammar.', photo: '/images/gurus/raghu-anantanarayanan.jpeg' },
      { name: 'Shri Notchur Venkatraman', tradition: 'Vedanta and Scriptures', text: 'Whose clarity on Advaita Vedanta brought the philosophical tradition alive as a practical inner science.', photo: '/images/gurus/notchur-venkatraman.jpeg' },
      { name: 'Smt. Sashikala Ananth', tradition: 'Vaastu and Sacred Design, Ritambhara', text: "Whose work on space, form, and the intelligence of environment shaped the understanding that context and one’s relationship with it are part of the work.", photo: '/images/gurus/sashikala-ananth.jpeg' },
      { name: 'Smt. Anuradha Ramesh', tradition: 'Sacred Paths', text: 'For guidance on the deeper paths of inquiry and practice that underpin the spiritual layer of this work.', photo: '/images/gurus/anuradha-ramesh.jpeg' },
      { name: 'Smt. Saraswati Vasudevan', tradition: 'Yoga Therapy, Yogavahini', text: 'Whose rigorous training in therapeutic yoga brought precision to the body-based work.', photo: '/images/gurus/saraswati-vasudevan.jpeg' },
      { name: 'Thaddeus Lawrence', tradition: 'Somatic and Energy Work, Ritambhara', text: 'The mentor, who brought tough love into action, who pushed relentlessly to pursue excellence, who bridged Eastern energy practice and Western somatic science into something embodied and real.', photo: '/images/gurus/thaddeus-lawrence.jpeg' },
      { name: 'Acharya Sangha', tradition: 'Community of Practice', text: 'The ongoing circle of practitioners whose collective inquiry keeps the work honest, grounded, and alive.', photo: '/images/gurus/ritambhara.jpeg', logo: true },
    ],
  },
  cta: {
    heading: "If This Resonates, Let’s Talk.",
    subtext: "Book a clarity call, a 45-minute conversation to understand your pattern and see if there’s a fit.",
    buttonText: 'Book a Clarity Call',
    note: 'No obligation. Just clarity on where you are and whether this is the right path forward.',
  },
}

export default function About() {
  const { content } = useContent('about')
  const c = (section, key) => content?.[section]?.[key] ?? defaults[section]?.[key]

  const chapters = c('founder', 'chapters') || []
  const depths = c('threeDepths', 'depths') || []
  const credItems = c('credentials', 'items') || []
  const spiritual = c('lineage', 'spiritual') || []
  const teachers = c('lineage', 'teachers') || []

  return (
    <>
      {/* 1. Hero */}
      <section className="relative bg-navy-950 text-warm-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(240,222,160,0.05) 0%, transparent 60%)' }} />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6 lg:px-12 py-24 md:py-32 grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-8">{c('hero', 'badge')}</p>
            <h1 className="font-display font-normal text-warm-50 leading-[1.25] mb-6" style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.8rem)' }}>
              {c('hero', 'title')}
            </h1>
            <p className="font-display italic text-gold-300 leading-[1.4] mb-8" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}>
              {c('hero', 'subtitle')}
            </p>
            <p className="text-[1rem] leading-[1.85] text-warm-50/70 max-w-[600px]">
              {c('hero', 'closing')}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="relative max-w-[340px] mx-auto lg:max-w-none">
              <div className="absolute -inset-2 bg-gold-400/10 blur-2xl rounded-full" />
              <img
                src={c('hero', 'image')}
                alt="Gowtham Balaji"
                className="relative w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.5))' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. The Founder / The Story */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <div className="lg:sticky lg:top-[120px] w-full max-lg:max-w-[280px] max-lg:mx-auto">
              <img
                src={c('founder', 'portrait')}
                alt={c('founder', 'name')}
                className="w-full h-auto object-cover border border-navy-950/10"
              />
              <div className="mt-6">
                <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-2">{c('founder', 'label')}</p>
                <h2 className="font-display text-[clamp(1.5rem,2.5vw,1.9rem)] font-normal text-navy-950 mb-1 leading-[1.3]">{c('founder', 'name')}</h2>
                <p className="text-[0.85rem] text-navy-950/55 italic">{c('founder', 'role')}</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            {chapters.map((ch, i) => (
              <ScrollReveal key={i}>
                <div className="mb-12 last:mb-0">
                  <p className="font-display text-[0.72rem] tracking-[0.25em] uppercase font-medium text-gold-400 mb-4">{ch.label}</p>
                  {(ch.paragraphs || []).map((para, pi) => (
                    <p
                      key={pi}
                      className="text-[0.98rem] leading-[1.95] text-navy-950/65 mb-4 [&_strong]:text-navy-950 [&_strong]:font-medium"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}

                  {ch.practiceItems && (
                    <div className="mt-6 py-7 px-9 bg-warm-50 border-l-[3px] border-gold-400">
                      {ch.practiceLabel && (
                        <p className="font-display text-[0.72rem] tracking-[0.2em] uppercase font-medium text-gold-400 mb-4">{ch.practiceLabel}</p>
                      )}
                      {ch.practiceItems.map((item, pi) => (
                        <div key={pi} className="flex gap-3 mb-3 items-start last:mb-0">
                          <div className="w-[5px] h-[5px] rounded-full bg-gold-400 shrink-0 mt-[0.65rem]" />
                          <p className="text-[0.92rem] leading-[1.8] text-navy-950/65">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {ch.quote && (
                    <div className="mt-6 p-9 bg-navy-950 text-warm-50 border-l-[3px] border-gold-400">
                      <div className="font-display text-[3rem] text-gold-400/40 leading-none mb-1 select-none">&ldquo;</div>
                      <p className="font-display italic text-warm-50 leading-[1.5]" style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.2rem)' }}>
                        {ch.quote}
                      </p>
                    </div>
                  )}

                  {ch.image && (
                    <div className="mt-6 group">
                      <img
                        src={ch.image}
                        alt={ch.imageCaption || ch.label}
                        className="w-full h-auto object-cover border border-navy-950/10 max-h-[420px] object-center"
                      />
                      {ch.imageCaption && (
                        <p className="text-[0.78rem] text-navy-950/45 italic mt-2">{ch.imageCaption}</p>
                      )}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Three Depths of Work */}
      <section className="bg-warm-50 py-24 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-5">{c('threeDepths', 'label')}</p>
            <h2 className="font-display font-normal text-navy-950 leading-[1.25] mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              {c('threeDepths', 'title')}
            </h2>
            <p className="text-[1rem] leading-[1.85] text-navy-950/65 max-w-[820px] mb-14">
              {c('threeDepths', 'intro')}
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {depths.map((d, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-r-2xl border border-navy-950/10 border-l-[3px] border-l-navy-950 p-9 md:p-11 transition-all duration-300 hover:border-l-gold-400 hover:shadow-[0_12px_40px_rgba(9,1,52,0.06)]">
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-3">
                    <span className="font-display text-gold-400 leading-none" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>
                      Depth {d.number}
                    </span>
                    <h3 className="font-display text-navy-950 leading-[1.35]" style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.2rem)' }}>
                      {d.audience}
                    </h3>
                  </div>
                  <p className="font-display italic text-navy-950/70 mb-5 leading-[1.5]" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)' }}>
                    {d.tagline}
                  </p>
                  <p className="text-[0.92rem] leading-[1.85] text-navy-950/65 mb-5">{d.body}</p>
                  <p className="font-display text-gold-400 text-[0.85rem] tracking-[0.05em] font-medium pt-4 border-t border-navy-950/10">
                    {d.stat}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Training and Credentials */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-5">{c('credentials', 'label')}</p>
            <h2 className="font-display font-normal text-navy-950 leading-[1.25] mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              {c('credentials', 'title')}
            </h2>
            <p className="font-display italic text-navy-950/55 leading-[1.7] max-w-[820px] mb-12" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)' }}>
              {c('credentials', 'intro')}
            </p>
          </ScrollReveal>

          <div className="divide-y divide-navy-950/10 border-t border-b border-navy-950/10">
            {credItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="grid md:grid-cols-[260px_1fr] gap-4 md:gap-10 py-7">
                  <h3 className="font-display text-[0.98rem] font-medium text-navy-950 leading-[1.4]">{item.title}</h3>
                  <p className="text-[0.92rem] leading-[1.85] text-navy-950/65">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Lineage */}
      <section className="bg-warm-50 py-24 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-5 text-center">{c('lineage', 'label')}</p>
            <h2 className="font-display font-normal text-navy-950 leading-[1.25] mb-5 text-center" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)' }}>
              {c('lineage', 'title')}
            </h2>
            <p className="text-[0.95rem] leading-[1.8] text-navy-950/55 italic max-w-[760px] mx-auto mb-14 text-center">
              {c('lineage', 'subtitle')}
            </p>
          </ScrollReveal>

          {/* Spiritual Ground */}
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.25em] uppercase font-medium text-gold-400 mb-8 text-center">
              {c('lineage', 'spiritualHeading')}
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {spiritual.map((g, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-[140px] h-[140px] rounded-full mx-auto mb-5 border-2 border-gold-300/40 overflow-hidden bg-white">
                    <img src={g.photo} alt={g.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-display text-[0.95rem] font-medium text-navy-950 mb-1 leading-[1.4]">{g.name}</h4>
                  <p className="text-[0.78rem] text-gold-400 italic mb-3">{g.tradition}</p>
                  <p className="text-[0.85rem] text-navy-950/55 leading-[1.7] max-w-[260px] mx-auto">{g.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Teachers and Mentors */}
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.25em] uppercase font-medium text-gold-400 mb-8 text-center">
              {c('lineage', 'teachersHeading')}
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {teachers.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex gap-5 items-start">
                  <div className={`w-[90px] h-[90px] shrink-0 border-2 border-gold-300/40 overflow-hidden ${t.logo ? 'rounded-xl bg-white' : 'rounded-full'}`}>
                    <img src={t.photo} alt={t.name} className={`w-full h-full ${t.logo ? 'object-contain p-2' : 'object-cover'}`} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-display text-[0.95rem] font-medium text-navy-950 leading-[1.4] mb-0.5">{t.name}</h4>
                    <p className="text-[0.78rem] text-gold-400 italic mb-2">{t.tradition}</p>
                    <p className="text-[0.85rem] text-navy-950/55 leading-[1.7]">{t.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        heading={c('cta', 'heading')}
        subtext={c('cta', 'subtext')}
        buttonText={c('cta', 'buttonText')}
        buttonTo="/contact"
        dark
      />
      {c('cta', 'note') && (
        <div className="bg-navy-950 -mt-12 pb-16 text-center px-6">
          <p className="text-[0.85rem] italic text-warm-50/55">{c('cta', 'note')}</p>
        </div>
      )}
    </>
  )
}
