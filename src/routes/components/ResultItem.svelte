<script>
    import {
        ListGroupItem
    } from 'sveltestrap'

    export let index
    export let text
    export let cos

    const is_equal = (cos) => {
        return cos >= 1.0
    }

    const is_good = (cos) => {
        return ((cos > 0.5) && (cos < 1))
    }

    const is_middle = (cos) => {
        return ((cos > 0) && (cos <= 0.5))
    }

    const get_item_class = (cos) => {
        if (is_equal(cos)) {
            return 'success'
        }
        else if (is_good(cos)) {
            return 'primary'
        }
        else if (is_middle(cos)) {
            return 'info'
        }
    }
</script>

<ListGroupItem color={get_item_class(cos)}>{index}) {text} - ({cos})</ListGroupItem>