$(document).ready(function () {
  if($('.hubspot-embed-form').length > 0) {
    hbspt.forms.create({
      portalId: "5668913",
      formId: "96f57a00-ba9f-420a-a2a0-a9261a432237",
      target: ".hubspot-embed-form",
      cssClass: "embed-contact-form",
      submitButtonClass: 'btn btn-block btn-primary',
      errorClass: "form-group is-invalid",
      errorMessageClass: "form-group error-message",
    })
  }
});
