function sendMail() {
    let information = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    const serviceId = "service_s52q855";
    const templetId = "template_xle2rji";
    emailjs.send(serviceId, templetId, information).then((res) => {
      document.getElementById("name").value = " ";
      document.getElementById("email").value = " ";
      document.getElementById("subject").value = " ";
      document.getElementById("message").value = " ";
      console.log(res);
      alert("Your message has been sent. Thank you!");
    });
  }
  