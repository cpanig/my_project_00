<template>
<!--区域人数统计-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">区域人数统计</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
            <div class="form-group row">
                <label for="formInput1" class="col-md-1 text-right form_lab mt-2">时间：</label>
                <input class="col-md-4 form-control" id="formInput1" type="datetime-local">
                <div class="col-md-2 text-right" style="margin-left:8%">
                    <button type="submit" class="btn btn-primary">确定</button>
                </div>
            </div>
        </form>
        <table class="col-md-10 table table-hover">
            <tbody><tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody></table>
        <div class="col-md-10 text-center">
            <p>无任何异常！</p>
            <button type="button" class="btn btn-primary">确人所有异常</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>
