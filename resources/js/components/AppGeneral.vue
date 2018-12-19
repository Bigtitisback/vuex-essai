<template lang="html">
    <div class="">
        <slot-scoped :options="todos">
            <template slot-scope="{option: todo}">
                <p>{{todo.text}}</p>
                <p>{{todo.title}}</p>
            </template>
        </slot-scoped>
        <slot-scoped :options="contacts">
            <template slot-scope="{option: contact}">
                <p>{{contact.name}}</p>
                <p>{{contact.number}}</p>
            </template>
        </slot-scoped>
    </div>
</template>
<script>
import SlotScoped from './SlotScoped.vue';

export default {
    components: {
        SlotScoped,
    },
    props: {
        name: {
            type: Mixed,
            required: true,
            default: null
        }
    },
    data() {
        return {
            todos: [{
                    title: 'Hello World!',
                    text: 'Text'
                },
                {
                    title: 'Hello Planet!',
                    text: 'Terre'
                },
                {
                    title: 'Hello Bruxelles!',
                    text: 'Ville'
                },
            ],
            contacts: [{
                    name: 'Jonh Doe',
                    number: '01489632118'
                },
                {
                    name: 'Umit',
                    number: '0118'
                },
                {
                    name: 'Corentin',
                    number: '032118'
                },
            ]
        }
    },
    methods: {
        methodName (param1, param2) {
        }
    }
}

</script>
<style lang="css">
</style>
