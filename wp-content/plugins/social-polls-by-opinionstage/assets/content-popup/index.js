import Modal from './lib/modal.js'
import ContentPopupContent from './app/index.js'
import {
  WIDGET_ALL,
  WIDGET_POLL,
  WIDGET_SET,
  WIDGET_SURVEY,
  WIDGET_SLIDESHOW,
  WIDGET_TRIVIA_QUIZ,
  WIDGET_PERSONALITY_QUIZ,
  WIDGET_LIST,
  WIDGET_FORM,
  WIDGET_STORY,
} from './app/widget-types.js'

if (window.OpinionStage && typeof (OpinionStage.contentPopup) !== 'undefined') {
  console.warn('[OpinionStage] content-popup APIs was already included')
}

/*
 * Content popup API for internal plugin use:
 *   OpinionStage.contentPopup.open({
 *     onWidgetSelect: function (widget) {
 *       // insert shortcode (widget.shortcode) or
 *       // call gutenberg APIs
 *     }
 *   })
 */
;(function (OS, $) {
  class ContentPopup {
    constructor() {
      // vuejs vm instance
      this.app = undefined

      // tingle.js popup instance
      this.modal = undefined
    }

    open({preselectWidgetType, onWidgetSelect}) {
      if (typeof (onWidgetSelect) !== 'function') {
        throw new Error('onWidgetSelect must be a function')
      }

      $(() => {
        if (!this.app) {
          createModal.call(this)
        }

        this.app.widgetType = preselectWidgetType || WIDGET_ALL
        this.app.widgetSelectCb = onWidgetSelect
        this.modal.open()
      })
    }
  }

  function createModal() {
    const self = this

    self.modal = new Modal({
      content: $('[data-opinionstage-content-popup-template]').html(),

      onCreate(modal) {
        self.app = new ContentPopupContent(modal)
      },

      onClose(modal) {
        self.app.isModalOpened = false
      },

      onOpen(modal) {
        self.app.isModalOpened = true
      },
    })
  }


  class WidgetList {
    constructor() {
      // vuejs vm instance
      this.app = undefined
    }

    show(onWidgetSelect) {
      if (typeof (onWidgetSelect) !== 'function') {
        onWidgetSelect = function () {
        }
      }

      const content = $('[data-opinionstage-content-popup-template]').html()
      $('[opinionstage-my-items-view]').html(content)

      if (!this.app) {
        this.app = new ContentPopupContent()
      }

      this.app.widgetType = WIDGET_ALL
      this.app.isModalOpened = true
      this.app.isMyItemsPage = true
      this.app.widgetSelectCb = onWidgetSelect
    }
  }

  OS.contentPopup = new ContentPopup()
  OS.widgetList = new WidgetList()

  OS.contentPopup.WIDGET_ALL = WIDGET_ALL
  OS.contentPopup.WIDGET_POLL = WIDGET_POLL
  OS.contentPopup.WIDGET_SET = WIDGET_SET
  OS.contentPopup.WIDGET_SURVEY = WIDGET_SURVEY
  OS.contentPopup.WIDGET_SLIDESHOW = WIDGET_SLIDESHOW
  OS.contentPopup.WIDGET_TRIVIA_QUIZ = WIDGET_TRIVIA_QUIZ
  OS.contentPopup.WIDGET_PERSONALITY_QUIZ = WIDGET_PERSONALITY_QUIZ
  OS.contentPopup.WIDGET_LIST = WIDGET_LIST
  OS.contentPopup.WIDGET_FORM = WIDGET_FORM
  OS.contentPopup.WIDGET_STORY = WIDGET_STORY
})(window.OpinionStage = window.OpinionStage || {}, jQuery)

// this is part is specific only to classic WordPress editor
jQuery(function ($) {
  if (window.location.href.indexOf('modal_is_open') > -1) {
    OpinionStage.contentPopup.open({
      onWidgetSelect
    })

    modal.open()
  }

  $('body').on('click', '[data-opinionstage-content-launch]', function (e) {
    e.preventDefault()

    function onWidgetSelect(widget) {
      wp.media.editor.insert(widget.shortcode)
    }

    OpinionStage.contentPopup.open({
      onWidgetSelect
    })
  })
})
