<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">个人井下定位</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class=" ml-2 mt-3">
          <h5>请设置井下实时显示的员工，该设置对当前有效。</h5>
          <div class="form-group col-sm-12 row">
                <input  class="form-control"  placeholder="必填">
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <a href="#New-tab-inner" class="btn btn-primary">确定</a>
          </div>
        </form>
      </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>
