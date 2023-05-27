<template>
  <div @click="$router.go(-1)" class="back-button">
    <fa :icon="['fa', 'chevron-left']" />
    <div class="text">Back</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@media screen and (max-width: 900px) {
  .back-button{
    display: none !important;
  }
}
.back-button{
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .4rem 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #858dad;
  background-color: rgba(31, 40, 49, 1);
  box-shadow: inset 0 0 5px #858dad;
  border-radius: 1rem;
  font-size: .8rem;
  font-weight: 500;
  transition: .2s ease-in-out;
  &:hover {
    color: white;
    box-shadow: inset 0 0 5px white;
  }
}
</style>