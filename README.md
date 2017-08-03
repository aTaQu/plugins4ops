# plugins4ops
jQuery QueryBuilder plugin. Allows the application of different jQuery plugins to different operators per filter. 

## Initialize the plugin 

```js
$('#builder').queryBuilder({
        plugins: {'plugins4ops': {}},
        ...
```

## Example configuration of the filter

```js
{
            id: 'category',
            label: 'Category',
            type: 'string',
            operators: ['equal', 'not_equal', 'between','in', 'not_in'],
            plugins: [
                {
                    //If no operators are specified the plugin configuration will be applied to all operators
                    plugin: 'pluginName',
                    config: {
                        data: ["abc", "xyz", "qwe", "rty"],
                        multiple: true,
                        tags: true
                    }
                },{
                    operators: ['equal', 'not_equal', 'between'],
                    plugin: 'pluginName',
                    config: {
                        data: ["abc", "xyz", "qwe", "rty"]
                    }
                }
            ]
        }
```
