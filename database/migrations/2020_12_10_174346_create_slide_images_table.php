<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSlideImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slide_images', function (Blueprint $table) {
            $table->id();
            $table->string('title_kh');
            $table->string('title_en');
            $table->longText('content_kh')->nullable();
            $table->longText('content_en')->nullable();
            $table->longText('path')->nullable();
            $table->tinyInteger('is_published')->default('0')->comment('0 is published');
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
        Schema::dropIfExists('slide_images');
    }
}
