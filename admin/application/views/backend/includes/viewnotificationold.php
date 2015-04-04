<div class=" row" style="padding:1% 0;">
	<div class="col-md-12">
	
		<a class="btn btn-primary pull-right"  href="<?php echo site_url('site/createnormaluser'); ?>"><i class="icon-plus"></i>Create </a> &nbsp; 
	</div>
	
</div>
<div class="row">
	<div class="col-lg-6">
		<section class="panel">
			<header class="panel-heading">
                Frontend User Details
            </header>
			<div class="drawchintantable">
                <?php $this->chintantable->createsearch("Frontend Users List");?>
                <table class="table table-striped table-hover" id="" cellpadding="0" cellspacing="0" >
                <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="startdateofbanner">Start Date</th>
                        <th data-field="enddateofbanner">End Date</th>
                        <th data-field="action"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
                </table>
                   <?php $this->chintantable->createpagination();?>
            </div>
		</section>
		<script>
            function drawtable(resultrow) {
                return "<tr><td>" + resultrow.id + "</td><td>" + resultrow.startdateofbanner + "</td><td>" + resultrow.enddateofbanner + "</td><td><a class='btn btn-primary btn-xs' href='<?php echo site_url('site/editcategorybanner?id=');?>"+resultrow.id +"'><i class='icon-pencil'></i></a><a class='btn btn-danger btn-xs' href='<?php echo site_url('site/deletecategorybanner?id='); ?>"+resultrow.id +"'><i class='icon-trash '></i></a></td><tr>";
            }
            generatejquery('<?php echo $base_url;?>');
        </script>
	</div>
<!--
	<div class="col-lg-6">
		<section class="panel">
			<header class="panel-heading">
                Frontend User Details
            </header>
			<div class="drawchintantable">
                <?php $this->chintantable->createsearch("Frontend Users List");?>
                <table class="table table-striped table-hover" id="" cellpadding="0" cellspacing="0" >
                <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="firstname">Firstname</th>
                        <th data-field="lastname">Lastname</th>
                        <th data-field="accesslevel">Accesslevel</th>
                        <th data-field="email">Email</th>
                        <th data-field="contact">Contact</th>
                        <th data-field="action"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
                </table>
                   <?php $this->chintantable->createpagination();?>
            </div>
		</section>
		<script>
            function drawtable(resultrow) {
                return "<tr><td>" + resultrow.id + "</td><td>" + resultrow.firstname + "</td><td>" + resultrow.lastname + "</td><td>" + resultrow.accesslevel + "</td><td>" + resultrow.email + "</td><td>" + resultrow.contact + "</td><td><a class='btn btn-primary btn-xs' href='<?php echo site_url('site/editnormaluser?id=');?>"+resultrow.id +"'><i class='icon-pencil'></i></a><a class='btn btn-danger btn-xs' href='<?php echo site_url('site/deletenormaluser?id='); ?>"+resultrow.id +"'><i class='icon-trash '></i></a></td><tr>";
            }
            generatejquery('<?php echo $base_url;?>');
        </script>
	</div>
-->
</div>
