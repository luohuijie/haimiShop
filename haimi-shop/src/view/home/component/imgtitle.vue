<template>
  <div>
    <div class="title-img">
      <a><img :src="imgtit.Records[0].PictureWebp" alt=""></a>
    </div> 
  </div>
</template>

<script>
export default {
	props: ['imgtit']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title-img{
  margin-top: .1rem;
}
.title-img a{
  display: block;
}
.title-img a img{
  display: block;
  width: 100%;
}
</style>
