// `badge` is an image path under /public (or a full URL). If the image is
// missing, the card falls back to a monogram. Leave `verifyUrl` empty to hide
// the Verify button. `credentialId` is shown with a copy button when the
// verify page needs the ID typed in.
export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Oct 2026',
    badge: '/images/badges/aws.jpg',
    verifyUrl: 'https://www.credly.com/badges/e6f1d134-13fd-40b5-ba83-269d97908471',
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Aug 2026',
    badge: '/images/badges/aws.jpg',
    verifyUrl: 'https://cp.certmetrics.com/amazon/en/public/verify/credential',
    credentialId: '852311eb653a4d388b438a7b5861ba36',
    verifyNote: 'Enter the credential ID on the AWS CertMetrics page',
  },
  {
    name: 'Agile Project Management in ICT Projects',
    issuer: 'University of Moratuwa (CODL)',
    date: 'Sep 2026',
    badge: '/images/badges/university-of-moratuwa.jpg',
    verifyUrl: 'https://open.uom.lk/verify',
    credentialId: 'APGJSqX01n',
    verifyNote: 'Enter the code on the Open UoM verify page',
  },
  {
    name: 'DevOps Professional Certificate',
    issuer: 'PagerDuty & LinkedIn',
    date: 'Nov 2025',
    badge: '/images/badges/pagerduty.jpg',
    verifyUrl:
      'https://www.linkedin.com/learning/certificates/13f09fc906ab109cad32e6b38c5c5ba44db1d1477e8847c19f391259ec464da7',
  },
  {
    name: 'PCEP – Certified Entry-Level Python Programmer',
    issuer: 'OpenEDG Python Institute',
    date: 'Dec 2024',
    badge: '/images/badges/python-institute.jpg',
    verifyUrl: 'https://verify.openedg.org/?id=n8j4.gXeY.x3gH',
    credentialId: 'n8j4.gXeY.x3gH',
  },
]
