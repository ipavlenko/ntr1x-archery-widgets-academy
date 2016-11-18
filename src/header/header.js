(function($, Vue, Core) {

    Vue.component('academy-header', {
        template: '#academy-header',
        mixins: [ Core.WidgetMixin ],
        data: function() {
            return {
                entries: this.entries
            }
        },
    });

})(jQuery, Vue, Core);
