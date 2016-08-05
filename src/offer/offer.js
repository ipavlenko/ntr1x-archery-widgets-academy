(function($, Vue, Core, Widgets) {

    Vue.component('academy-offer-big', {
        template: '#academy-offer-big',
        mixins: [ Core.WidgetMixin ],
    });

    Vue.component('academy-offer-small', {
        template: '#academy-offer-small',
        mixins: [ Core.WidgetMixin ],
    });

})(jQuery, Vue, Core, Widgets);
