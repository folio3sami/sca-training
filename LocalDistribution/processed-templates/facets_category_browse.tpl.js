define('facets_category_browse.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <div class=\"facets-category-browse\"><nav class=\"facets-category-browse-facets\"><div id=\"category-navigation\" class=\"facets-category-browse-navigation\"><div class=\"facets-category-browse-header\"><div id=\"banner-left-top\" class=\"facets-category-browse-banner-left-top\"></div><h1 class=\"facets-category-browse-title\"> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Shop $(0)", (depth0 != null ? compilerNameLookup(depth0,"categoryItemId") : depth0), {"name":"translate","hash":{},"data":data})))
    + " </h1></div><div class=\"facets-category-browse-facets-list-wrapper\"><div data-view=\"Facets.FacetsList\"></div><div id=\"banner-left-bottom\" class=\"facets-category-browse-banner-left-bottom\"></div></div></div></nav><section id=\"category-list-container\" class=\"facets-category-browse-body\"><div id=\"banner-section-top\" class=\"facets-category-browse-banner-top\"></div><div data-view=\"Facets.CategoryCellList\"></div><div id=\"banner-section-bottom\" class=\"facets-category-browse-banner-bottom\"></div></section></div>  ";
},"useData":true}); template.Name = 'facets_category_browse'; return template;});