/**
 * @memberof module:plugins
 * @description Allows the application of different jQuery plugins to different operators per filter.
 */
var __QueryBuilder;
if(typeof (QuerryBuilder)!== 'undefined'){
    __QueryBuilder = QuerryBuilder;
}else{
    __QueryBuilder = $.fn.queryBuilder;
}
__QueryBuilder.define('plugins4ops', function () {
    var QB = this;
    QB.on('afterUpdateRuleFilter.queryBuilder afterUpdateRuleOperator.queryBuilder ',
        function(e, rule) {
            //Builds a new input, which wipes the assigned plugins to the field
            e.builder.createRuleInput(rule);
            /**
             * @jQuery object of the rule input field
             */
            var $input = rule.$el.find(QB.constructor.selectors.rule_value);
            //Itterates the plugins for the rule
            for(var plugin in rule.filter.plugins){
                var current_plugin = rule.filter.plugins[plugin];
                var operators = current_plugin.operators ||
                    e.builder.getOperators(rule.filter).map(function (op) {
                        return op.type;
                    });
                if($.inArray(rule.operator.type, operators) > -1){
                    //Applies the jQuery plugin to the input field
                    $input[current_plugin.plugin](current_plugin.config || {});
                }
            }
        }
    );
});
