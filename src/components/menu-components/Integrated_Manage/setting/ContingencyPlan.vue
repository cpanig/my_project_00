<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="urgent-tab" data-toggle="tab" href="#urgent-inner" role="tab" aria-controls="dmg" aria-selected="true">应急预案管理</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="new-tab" data-toggle="tab" href="#new-inner" role="tab" aria-controls="dmg" aria-selected="true">新建</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="verify-tab" data-toggle="tab" href="#verify-inner" role="tab" aria-controls="dmg" aria-selected="true">修改</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="remove-tab" data-toggle="tab" href="#remove-inner" role="tab" aria-controls="dmg" aria-selected="true">删除</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <!-- 应急预案管理-->
      <div class="tab-pane fade show active" id="urgent-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h1>1</h1>
        </form>
      </div>
      <!-- 新建 -->
      <div class="tab-pane fade show" id="new-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h1>2</h1>
        </form>
      </div>
      <!-- 修改 -->
      <div class="tab-pane fade show" id="verify-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h1>3</h1>
        </form>
      </div>
      <!-- 删除 -->
      <div class="tab-pane fade show" id="remove-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <h1>4</h1>
        </form>
      </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>
