<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('post_type_id');
            $table->string('thumbnail')->nullable();
            $table->string('title_en');
            $table->string('title_kh');
            $table->tinyInteger('is_published')->default('0')->comment('0 is published');
            $table->string('activate_code')->nullable();
            $table->longText('content_en')->nullable();
            $table->longText('content_kh')->nullable();
            $table->string('created_by');
            $table->string('updated_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
