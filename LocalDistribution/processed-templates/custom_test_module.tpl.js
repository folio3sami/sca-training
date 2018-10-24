define('custom_test_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <h2>Custom Test Module</h2><p>Variable from Context "
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"contextVar") || (depth0 != null ? compilerNameLookup(depth0,"contextVar") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contextVar","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true}); template.Name = 'custom_test_module'; return template;});