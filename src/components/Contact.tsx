import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'saefullahiddris@gmail.com',
      href: 'mailto:saefullahiddris@gmail.com',
      description: 'Email me for project inquiries or collaborations',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 8953 3309 78461',
      href: 'tel:+628953330978461',
      description: 'Available Mon-Fri, 9AM-6PM',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bogor, Indonesia',
      href: null,
      description: 'Open To Work',
    },
  ];

  //Social Links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/IdrisSyaifulloh',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/idris-syaifulloh-b36478263/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/idrissyfllh',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 lg:py-40 bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            {contactMethods.map((method, i) => (
              <InteractiveContactCard
                key={method.title}
                method={method}
                delay={0.2 + i * 0.1}
                isInView={isInView}
              />
            ))}

            {/* SOCIAL LINKS */}
            <div className="pt-10 border-t border-gray-200 dark:border-gray-800 mt-10">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                Connect on Social
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 space-y-6"
            >
              <PremiumInput
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isFocused={focusedField === 'name'}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              />

              <PremiumInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                isFocused={focusedField === 'email'}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />

              <PremiumTextarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                isFocused={focusedField === 'message'}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />

              <PremiumSubmitButton isSubmitted={isSubmitted} />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== COMPONENTS ===== */

function InteractiveContactCard({ method, delay, isInView }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => mouseX.set(0)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="mb-6"
    >
      <motion.a
        href={method.href || undefined}
        style={{ x }}
        className="block p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-black dark:hover:border-white transition-all"
      >
        <div className="flex gap-4">
          <method.icon />
          <div>
            <p className="font-medium">{method.title}</p>
            <p className="text-sm text-gray-500">{method.value}</p>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

function PremiumInput({ label, isFocused, ...props }: any) {
  return (
    <div>
      <label className="text-sm mb-1 block">{label}</label>
      <input
        {...props}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:outline-none"
      />
    </div>
  );
}

function PremiumTextarea({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm mb-1 block">{label}</label>
      <textarea
        {...props}
        rows={6}
        required
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black resize-none"
      />
    </div>
  );
}

function PremiumSubmitButton({ isSubmitted }: any) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitted}
      whileTap={{ scale: 0.98 }}
      className="w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black flex justify-center gap-2"
    >
      {isSubmitted ? (
        <>
          <CheckCircle size={18} /> Sent!
        </>
      ) : (
        <>
          Send Message <Send size={16} />
        </>
      )}
    </motion.button>
  );
}
