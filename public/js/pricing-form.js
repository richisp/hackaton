$(document).ready(function () {
  if($('.hubspot-embed-form').length > 0) {
    hbspt.forms.create({
      portalId: "5668913",
      formId: "7c9bd203-7825-49d9-9ebf-05b68e490d60",
      sfdcCampaignId: "7010X000000ew1jQAA",
      target: ".hubspot-embed-form",
      cssClass: "embed-contact-form",
      submitButtonClass: 'btn btn-block btn-primary',
      errorClass: "form-group is-invalid",
      errorMessageClass: "form-group error-message",
    })
  }
});
