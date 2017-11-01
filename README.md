# gitbook-plugin-blueprint-tour

Gitbook plugin to display an interactive tour of a Brooklyn blueprint. You can see a live example [here](https://brooklyn.apache.org/v/1.0.0-SNAPSHOT/start/policies.html)

## Usage

This plugins uses gitbook blocks to create a tour:

```markdown
{% tour %}

{% block title="My **title**", description="My *description* with a [link](http://example.org)" %}
name: example
brooklyn.config:
  foo: bar

...

{% endtour %}
```

### `tour` block

This block wraps all `block` blocks for the tour. There is no configuration for it

### `block` block

This block creates a new blueprint tour block that consist of:

| Config            | Description                                                                                               | required |
| ----------------- | --------------------------------------------------------------------------------------------------------- | -------- |
| title (arg)       | The title of the block. Will be display on the left of the body. Accept markdown syntax                   | Yes      |
| description (arg) | The description of the block. Will be displayed when hovering this specific block. Accept markdown syntax | Yes      |
| body              | This is the code to display for this particular block. Accept HTML and markdown syntax                    | No       |