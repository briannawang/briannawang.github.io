import './Contact.css';
import githubLogo from '../assets/githubLogo.png';
import emailLogo from '../assets/emailLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';

function Contact() {
  let contact_list = [
    {
      'href': "https://github.com/briannawang",
      'target': "_blank",
      'src': githubLogo,
      'text': "GITHUB"
    },
    {
      'href': "mailto:brianna.wang@gmail.com",
      'src': emailLogo,
      'text': "EMAIL"
    },
    {
      'href': "https://www.linkedin.com/in/briannawang/",
      'target': "_blank",
      'src': linkedinLogo,
      'text': "LINKEDIN"
    },
  ]

  const contact_list_div = contact_list.map((item, i) => {
    return(<a class="contactLink" href={item.href} target={item.target} title={item.href}>
            <div class="contactBox">
              <div class="contactLogo"><img src={item.src} width="15px" height="15px"/></div>
              <div class="contactText">{item.text}</div>
            </div>
          </a>)
  })
  return (
    <div className="contact-position">
      <div className="greeting">Hi! It's <b>Brianna</b></div>
      {contact_list_div}
  </div>
  );
}

export default Contact;