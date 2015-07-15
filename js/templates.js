angular.module('ruiComponents').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/_all.html',
    "<div ng-controller=\"ruiAppController\" style=\"width:1000px;margin:auto;\">\n" +
    "  <h1>The Definitive Redox UI Component Handbook <br>\n" +
    "    <small>Demonstrations of and Guidelines for the Various and Assorted Wonders of the Redox UI</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <div>\n" +
    "    <h2 class=\"page-header\">Getting Started</h2>\n" +
    "    <p>\n" +
    "      First get the components: <code>bower install rui-components</code>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Then, make sure you have the dependencies:\n" +
    "    </p>\n" +
    "    <ul>\n" +
    "      <li>Angular</li>\n" +
    "      <li>Bootstrap</li>\n" +
    "      <li>Ionicons</li>\n" +
    "      <li>Tinycolor (for rui-chips)</li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "\n" +
    "  <div>\n" +
    "    <h2 class=\"page-header\">Buttons: <code>rui-button</code></h2>\n" +
    "    <p>\n" +
    "      We have three standard types of buttons:\n" +
    "    </p>\n" +
    "    <rui-button primary ng-click=\"incrementClickCnt()\">Primary</rui-button>\n" +
    "    <rui-button secondary ng-click=\"incrementClickCnt()\">Secondary</rui-button>\n" +
    "    <rui-button ng-click=\"incrementClickCnt()\">Default</rui-button>\n" +
    "    <p>\n" +
    "      Use primary for the primary action(s) the user will want to take on a page: e.g. submitting a form. Use secondary for the actions you user might want to take but that are not the primary actions on a page. Use default for everything else, which should be most things.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Using primary or secondary is a recommendation to the user, so don't place them side by side. That's confusing. If paired with another button (e.g. save, cancel), the other button should be the default style.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Indicate which type of button you want by adding a <code>primary</code> or <code>secondary</code> attribute, or leaving them off to get the default styling:\n" +
    "    </p>\n" +
    "    <pre ng-non-bindable>\n" +
    "      <code data-language=\"html\">\n" +
    "        Coming soon...\n" +
    "      </code>\n" +
    "    </pre>\n" +
    "    <p>\n" +
    "      Use <code>ng-click</code> as usual to register click handlers. Clicking any of the buttons in this section increments the click count: {{clickCnt}}\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Disable a button with <code>ng-disable</code>, as you would a normal button. Each style button looks different when disabled:\n" +
    "    </p>\n" +
    "    <rui-button primary\n" +
    "                ng-click=\"incrementClickCnt()\"\n" +
    "                ng-disabled=\"!enableButtons\">\n" +
    "      Primary\n" +
    "    </rui-button>\n" +
    "    <rui-button secondary\n" +
    "                ng-click=\"incrementClickCnt()\"\n" +
    "                ng-disabled=\"!enableButtons\">\n" +
    "      Secondary\n" +
    "    </rui-button>\n" +
    "    <rui-button ng-click=\"incrementClickCnt()\"\n" +
    "                ng-disabled=\"!enableButtons\">\n" +
    "      Default\n" +
    "    </rui-button>\n" +
    "    <p>\n" +
    "      Button state: <input rui-toggle type=\"checkbox\" id=\"disableBtns\"  ng-model=\"enableButtons\" on-text=\"enabled\" off-text=\"disabled\">\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      You can also have a dropdown with your <code>rui-button</code>:\n" +
    "    </p>\n" +
    "    <rui-button type=\"button\" class=\"context-button\" ng-model=\"dropdownSelection\"\n" +
    "      bs-options=\"option as option for option in dropdownOptions\"\n" +
    "      bs-select>\n" +
    "      Dropdown <span class=\"caret\"></span>\n" +
    "    </rui-button>\n" +
    "    <p>Selected: {{dropdownSelection}}</p>\n" +
    "  </div>\n" +
    "\n" +
    "\t<div>\n" +
    "\t\t<h2 class=\"page-header\">Help Text: <code>rui-helptext</code></h2>\n" +
    "    <p>\n" +
    "      Tuck help text in a convenient yet out-of-the-way place with <code>rui-helptext</code>. Use it primarily in form fields, attached to the label, to help the user fill out the form.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Add an <code>rui-helptext</code> attribute to the element you want supplemented with help text. Use either the <code>message</code> or <code>data</code> attribute to specify the help text. <code>message</code> takes a string of helptext. <code>data</code> take an expression (such as a scope variable) that evaluates to help text.\n" +
    "    </p>\n" +
    "\t\t<label rui-helptext message=\"This is the help text sample text for helping with the text of samples.\" style=\"font-size:30px;\">Chya</label>\n" +
    "    <br/>\n" +
    "\t\t<label rui-helptext data=\"helptextdata\" style=\"font-size:20px;\">Chya</label>\n" +
    "    <br>\n" +
    "    <label rui-helptext data=\"helptextdata\" style=\"font-size:40px;\">Chaa</label>\n" +
    "\t</div>\n" +
    "\n" +
    "  <div>\n" +
    "    <h2 class=\"page-header\">Cards: <code>rui-card</code></h2>\n" +
    "    <rui-card ref=\"dashboard.organization.index({orgId: org.id})\">\n" +
    "      Sample Organization 1\n" +
    "    </rui-card>\n" +
    "    <rui-card ref=\"dashboard.organization.index({orgId: org.id})\">\n" +
    "      Sample Organization 2\n" +
    "    </rui-card>\n" +
    "    <div style=\"visibility:hidden;display:block;height:0;clear:both;\"></div>\n" +
    "\n" +
    "    <h2 class=\"page-header\">Create Card: <code>rui-card-create</code></h2>\n" +
    "    <rui-card-create create-fn=\"samplecreate(name)\">\n" +
    "      Create Organization\n" +
    "    </rui-card-create>\n" +
    "      <div style=\"visibility:hidden;display:block;height:0;clear:both;\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div>\n" +
    "    <h2 class=\"page-header\">Alerts: <code>rui-alert</code></h2>\n" +
    "    <p>\n" +
    "      Use <code>rui-alert</code> as an element to display alerts, such as error messages, success messages, or anything else you want to call to the user's attention.\n" +
    "    </p>\n" +
    "    <rui-button ng-click=\"toggleAlert()\">Toggle Alerts</rui-button>\n" +
    "    <rui-alert message=\"alert.message\"></rui-alert>\n" +
    "    <div ng-repeat=\"type in ['info', 'warning', 'danger', 'success']\">\n" +
    "      <rui-alert title=\"alert.title\"\n" +
    "                 message=\"alert.message\"\n" +
    "                 type=\"type\"\n" +
    "                 show-contact=\"true\">\n" +
    "      </rui-alert>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div>\n" +
    "    <h2 class=\"page-header\">Tags: <code>rui-chip</code></h2>\n" +
    "    <rui-button ng-click=\"addTag()\">Add Tag</rui-button>\n" +
    "    <div>\n" +
    "      <rui-chip ng-repeat=\"tag in tags\"\n" +
    "                name=\"tag.name\"\n" +
    "                color=\"tag.color\"\n" +
    "                on-remove=\"removeTag(tag, $index)\">\n" +
    "      </rui-chip>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <h2 class=\"page-header\">Toggles: <code>rui-toggle</code></h2>\n" +
    "    <form name=\"toggleTestForm\" ng-submit=\"logToggle()\" novalidate>\n" +
    "      <div>\n" +
    "        <label>Disable next toggle?</label>\n" +
    "        <input rui-toggle\n" +
    "               type=\"checkbox\"\n" +
    "               id=\"toggle1\"\n" +
    "               name=\"toggle1\"\n" +
    "               ng-model=\"toggle1\"\n" +
    "               ng-change=\"incrementToggleCount()\"\n" +
    "               />\n" +
    "        Toggle1: {{toggle1}}\n" +
    "\n" +
    "      </div>\n" +
    "      <div>\n" +
    "        <label>Test toggle 2: </label>\n" +
    "        <input rui-toggle\n" +
    "               type=\"checkbox\"\n" +
    "               id=\"toggle2\"\n" +
    "               name=\"toggle2\"\n" +
    "               ng-model=\"toggle2\"\n" +
    "               on-text=\"on\"\n" +
    "               off-text=\"off\"\n" +
    "               ng-disabled=\"toggle1\"\n" +
    "               ng-true-value=\"'on'\"\n" +
    "               ng-false-value=\"'off'\"\n" +
    "               ng-change=\"incrementToggleCount()\"\n" +
    "               />\n" +
    "        Toggle2: {{toggle2}}\n" +
    "      </div>\n" +
    "      Toggles: {{toggleCount}}\n" +
    "    </form>\n" +
    "\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    <h2 class=\"page-header\">Spinner: <code>rui-spinner</code></h2>\n" +
    "      <p>Use the spinner to indicate work in progress. You can toggle it with ng-show. There is an inline version and a fullscreen version. The fullscreen version takes <code>top</code> and <code>left</code> attributes to indicate an offset so you can leave navigation exposed.</p>\n" +
    "      <rui-button ng-click=\"glimpseFullScreenSpinner()\">show fullscreen spinner</rui-button>\n" +
    "      <rui-fullscreen-spinner text=\"spinnerText\" ng-show=\"showFullScreenSpinner\"></rui-fullscreen-spinner>\n" +
    "      <br>\n" +
    "\n" +
    "      <rui-button ng-click=\"showInlineSpinner = !showInlineSpinner\">toggle inline spinner</rui-button>\n" +
    "      <br>\n" +
    "      <rui-spinner ng-show=\"showInlineSpinner\" fullscreen></rui-spinner>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('templates/alert.html',
    "<div ng-show=\"message\" ng-class=\"'rui-alert rui-alert-' + (type || 'danger')\">\n" +
    "  <h4 ng-show=\"title\">{{ title }}</h4>\n" +
    "  <p>{{ message }}</p>\n" +
    "  <p ng-if=\"showContact\">\n" +
    "    Need more help? Let us know at <a class=\"rui-alert-link\" href=\"mailto:support@RedoxEngine.com\">support@RedoxEngine.com</a>.\n" +
    "  </p>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/button.html',
    "<button\n" +
    "  class=\"btn rui-btn\"\n" +
    "\tng-class=\"primary ? 'rui-btn-primary' : (secondary ? 'rui-btn-secondary' : 'rui-btn-default')\"\n" +
    "  ng-transclude>\n" +
    "</button>"
  );


  $templateCache.put('templates/card-create.html',
    "<a class=\"rui-card\">\n" +
    "\n" +
    "  <div class=\"card-box\" id=\"inputCard\" ng-show=\"editing\">\n" +
    "    <div class=\"card-box-text\">\n" +
    "      <input type=\"text\" ng-model=\"createinput\" id=\"createinput\" name=\"createinput\" autofocus=\"true\"></input>\n" +
    "    </div>\n" +
    "    <div class=\"create-container\">\n" +
    "      <a ng-click=\"create()\">Create</a>\n" +
    "    </div>\n" +
    "    <div class=\"cancel-container\">\n" +
    "      <a ng-click=\"editing = !editing\"><span class=\"ion-close-circled\" style=\"font-size:12px;margin-right:2px;\"></span>cancel</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"card-box\" id=\"iconCard\" ng-hide=\"editing\" ng-click=\"editing = !editing\">\n" +
    "    <div class=\"card-box-text\">\n" +
    "      <div class=\"card-create-icon ion-plus\"></div>\n" +
    "      <ng-transclude>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "\n" +
    "</a>\n"
  );


  $templateCache.put('templates/card.html',
    "<a class=\"rui-card\" ui-sref={{ref}}>\n" +
    "  <div class=\"card-box\">\n" +
    "    <div class=\"card-box-text\">\n" +
    "      <ng-transclude>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</a>\n"
  );


  $templateCache.put('templates/chip.html',
    "<div class=\"rui-chip\" ng-style=\"style\">\n" +
    "  <span>{{name}}</span>\n" +
    "  <button type=\"button\" class=\"rui-close\" aria-label=\"Remove Tag\" ng-click=\"onRemove()\">\n" +
    "    <span aria-hidden=\"true\" ng-style=\"closeStyle\">&times;</span>\n" +
    "  </button>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/fullscreen.html',
    "<div class=\"rui-fullscreen\" ng-style=\"position\">\n" +
    "  <div class=\"rui-fullscreen-content\" ng-transclude>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('templates/helptext.html',
    "<div class=\"rui-helptext-container\">\n" +
    "  <span class=\"rui-helptext-icon ion-help-circled\" ng-mouseover=\"showtooltip=true\" ng-mouseleave=\"showtooltip=false\" ng-click=\"clicked=!clicked\" >\n" +
    "    <span class=\"rui-tooltip\" ng-class=\"{'rui-hidden': (!(clicked || showtooltip))}\">{{message}}</span>\n" +
    "  </span>\n" +
    "  <!-- <a class=\"rui-helptext-icon ion-help-circled\"><div rui-tooltip-data='{{message}}'></div></a> -->\n" +
    "</div>\n"
  );


  $templateCache.put('templates/select.html',
    ""
  );


  $templateCache.put('templates/spinner-fullscreen.html',
    "<div rui-fullscreen top=\"{{top}}\" left=\"{{left}}\">\n" +
    "  <rui-spinner></rui-spinner>\n" +
    "  <h3 ng-if=\"text\">{{text}}</h3>\n" +
    "</div>"
  );


  $templateCache.put('templates/spinner.html',
    "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"60px\" height=\"60px\"\n" +
    "   viewBox=\"0 0 60 60\" enable-background=\"new 0 0 60 60\" xml:space=\"preserve\">\n" +
    "  <g>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c0\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;0 30 30;360 30 30\"\n" +
    "       begin=\"0s\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c1\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;30 30 30;360 30 30\"\n" +
    "       begin=\"0s\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c2\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;60 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       begin=\"0s\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c3\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;90 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       begin=\"0s\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c4\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;120 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       begin=\"0s\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c5\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;150 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c6\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;180 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c7\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;210 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c8\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;240 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c9\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;270 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c10\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;300 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "    <polygon fill=\"#00B288\" points=\"33,3.6 27.6,0.1 26.9,0.1 26.9,3.5 30.2,5.5 26.9,7.4 26.9,10.8 27.6,10.8 33,7.3  \">\n" +
    "\n" +
    "    <animateTransform id=\"c11\" attributeName=\"transform\"\n" +
    "       attributeType=\"XML\"\n" +
    "       type=\"rotate\"\n" +
    "       values=\"0 30 30;330 30 30;360 30 30\"\n" +
    "       dur=\"1500ms\"\n" +
    "       repeatCount=\"indefinite\" />\n" +
    "\n" +
    "    </polygon>\n" +
    "  </g>\n" +
    "</svg>\n"
  );

}]);
