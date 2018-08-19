(function() {
  with(this) {
    return
    _c(
      'div',{
        attrs: {
          "id": "demo"
        }
      },
      [
      _c(
        'h1',
        [
          _v("Latest Vue.js Commits")
        ]
        ),
        _v(" "),
        _l(
            (branches),
            function(branch)  {
              return [
                _c(
                  'input',
                    {
                    directives: [{
                      name: "model",
                      rawName: "v-model",
                      value: (currentBranch),
                      expression: "currentBranch"
                    }],
                    attrs: {
                      "type": "radio",
                      "id": branch,
                      "name": "branch"
                    },
                    domProps: {
                      "value": branch,
                      "checked": _q(currentBranch, branch)
                    },
                    on: {
                      "change": function($event) {
                          currentBranch = branch
                      }
                    }
                  }),
                _v(" "),
                _c(
                    'label',
                      {
                        attrs: {
                          "for": branch
                        }
                      },
                      [
                        _v(_s(branch))
                      ]
                  )
              ]
            }
          ),
            _v(" "),
            _c(
                'p',
                [
                  _v("vuejs/vue@" + _s(currentBranch))
                ]),
                _v(" "),
                _c(
                    'ul',
                    _l(
                        (commits),
                        function(record) {
                          return _c(
                                    'li',
                                    [
                                      _c(
                                          'a',
                                            {
                                              staticClass: "commit",
                                              attrs: {
                                                "href": record.html_url,
                                                "target": "_blank"
                                              }
                                            },
                                            [
                                              _v(_s(record.sha.slice(0, 7)))]
                                            ),
                                            _v("\n          - "),
                                            _c(
                                              'span',
                                                {
                                                  staticClass: "message"
                                                },
                                                [
                                                  _v(
                                                      _s(
                                                          _f("truncate")(record.commit.message))
                                                        )
                                                ]
                                              ),
                                              _c('br'),
                                              _v("\n          by "),
                                              _c(
                                                  'span',
                                                    {
                                                      staticClass: "author"
                                                    },
                                                    [
                                                      _c(
                                                          'a',
                                                          {
                                                            attrs:
                                                            {
                                                                "href": record.author.html_url,
                                                                "target": "_blank"
                                                            }
                                                          },
                                                          [_v(_s(record.commit.author.name))]
                                                        )
                                                    ]
                                                  ),
                                                _v("\n          at "),
                                                _c(
                                                  'span',
                                                    {
                                                        staticClass: "date"
                                                    },
                                                    [
                                                      _v(
                                                        _s(
                                                            _f("formatDate")(record.commit.author.date))
                                                          )
                                                    ]
                                                  )
                                    ]
                          )
                    }
                    )
                )
      ]
      ,
      2
    )
  }
})