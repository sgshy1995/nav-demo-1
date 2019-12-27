<template>
<main>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</main>
</template>

<script>
export default {};
</script>

<style lang="scss">
main {
  width: 100%;
  background: #efefee;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 20px;
}
main > div{
    width: 150px;
    height: 150px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-bottom:20px;
}
</style>