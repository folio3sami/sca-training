define('recently_viewed_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return " <li class=\"recently-viewed-cell-item\"><div data-type=\"backbone.collection.view.cell\"></div></li>  ";
},"useData":true}); template.Name = 'recently_viewed_cell'; return template;});