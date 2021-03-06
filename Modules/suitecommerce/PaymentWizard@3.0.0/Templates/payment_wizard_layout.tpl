{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{#if showBreadcrumb}}
<header class="payment-wizard-layout-header">
	<h1 class="payment-wizard-layout-header-title">{{translate 'Make a Payment'}}</h1>
	<div data-view="Wizard.StepNavigation"></div>
</header>
{{/if}}
<div id="wizard-content" class="payment-wizard-layout-content"></div>



{{!----
Use the following context variables when customizing this template: 
	
	showBreadcrumb (Boolean)

----}}
