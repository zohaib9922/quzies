!function(t){formintorjs.define(["text!tpl/dashboard.html"],function(e){return Backbone.View.extend({className:"wpmudev-section--popup",popupTpl:Forminator.Utils.template(t(e).find("#forminator-delete-popup-tpl").html()),popupPollTpl:Forminator.Utils.template(t(e).find("#forminator-delete-poll-popup-tpl").html()),initialize:function(t){this.module=t.module,this.nonce=t.nonce,this.id=t.id,this.action=t.action,this.referrer=t.referrer,this.button=t.button||Forminator.l10n.popup.delete,this.content=t.content||Forminator.l10n.popup.cannot_be_reverted},render:function(){"poll"===this.module?this.$el.html(this.popupPollTpl({nonce:this.nonce,id:this.id,referrer:this.referrer,content:this.content})):this.$el.html(this.popupTpl({nonce:this.nonce,id:this.id,action:this.action,referrer:this.referrer,button:this.button,content:this.content}))}})})}(jQuery);