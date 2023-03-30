let CurrentYear = new Date().getFullYear();

let sectionOneTitle = "About Us";
let SectionTwoTitle = "Contact Info";
let SectionThreeTitle = "Newsletter";

let sectionOneContent = "The primary goal of the conference is to bring engineers, academicians, scientists, industry, researchers and students to a common platform to exchange and share their experience and research results about the various aspects of Cyber Security, and to discuss the practical challenges encountered and the solution adopted.";
let SectionTwoContent = `<li><p>Address:<br>Amal Jyothi College of Engineering<br>Kanjirapally, Kottayam - 686518</p></li><li><a href="mailto:nacore@amaljyothi.ac.in">Email : nacore@amaljyothi.ac.in</a></li>`;
let SectionThreeContent = "Know more about the event through our newsletters";

let footerCredit = "Copyright &copy; " + CurrentYear +" All rights reserved";

let formTarget ="_blank";
let formAction ="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01";
let formMethod ="get";

let submitButtonImage = "assets/img/gallery/form.png";
let footerLogo = "assets/img/logo/logo2_footer.png";

const html =`<div class="footer-area footer-padding"><div class="container"><div class="row d-flex justify-content-between"><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6"><div class="single-footer-caption mb-50"><div class="single-footer-caption mb-30"><div class="footer-tittle"><h4>${sectionOneTitle}</h4><div class="footer-pera"><p>${sectionOneContent}</p></div></div></div></div></div><div class="col-xl-3 col-lg-3 col-md-4 col-sm-5"><div class="single-footer-caption mb-50"><div class="footer-tittle"><h4>${SectionTwoTitle}</h4><ul>${SectionTwoContent}</ul></div></div></div><div class="col-xl-3 col-lg-3 col-md-6 col-sm-5"><div class="single-footer-caption mb-50"><div class="footer-tittle"><h4>${SectionThreeTitle}</h4><div class="footer-pera footer-pera2"><p>${SectionThreeContent}</p></div><div class="footer-form"><div id="mc_embed_signup"><form target="${formTarget}" action="${formAction}" method="${formMethod}" class="subscribe_form relative mail_part"><input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '"><div class="form-icon"><button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm"><img src="${submitButtonImage}" alt=""></button></div><div class="mt-10 info"></div></form></div></div></div></div></div></div><div class="row footer-wejed justify-content-between"><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6"><div class="footer-logo mb-20"><a href="index.html"><img src="${footerLogo}" alt=""></a></div></div></div></div></div><div class="footer-bottom-area footer-bg"><div class="container"><div class="footer-border"><div class="row d-flex justify-content-between align-items-center"><div class="col-xl-10 col-lg-8 "><div class="footer-copy-right"><p>${footerCredit}</p></div></div></div></div></div></div>`;
