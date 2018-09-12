<template>
    <div class="products-tabs">
        <div class="menu-tabs">
            <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tab 1</a>
            <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Tab 2</a>
            <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Tab 3</a>
        </div>

        <div class="content">
            <div v-if="activetab === 1" class="tabcontent">
                <h1>hej1</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
            <div v-if="activetab === 2" class="tabcontent">
                <h1>hej2</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
            <div v-if="activetab === 3" class="tabcontent">
                <h1>hej3</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis debitis esse omnis, rerum, a excepturi eligendi accusamus amet aliquid enim accusantium reiciendis dolorum eveniet dolore sed earum dolores labore numquam.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "tabs",
    data() {
        return {
            activetab: 1
        }
    }
  }
</script>
