$(document).ready(function () {
  if($('.hubspot-embed-form').length > 0) {
    hbspt.forms.create({
      portalId: "5668913",
      formId: "bb0b5205-22f6-41b7-9820-c0e1136648fd",
      sfdcCampaignId: "7010X000000ew1jQAA",
      target: ".hubspot-embed-form",
      cssClass: "embed-contact-form",
      submitButtonClass: 'btn btn-block btn-primary',
      errorClass: "form-group is-invalid",
      errorMessageClass: "form-group error-message",
    })
  }
});
