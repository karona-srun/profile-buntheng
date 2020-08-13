<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Traits\Uuids;

class Attachment extends Model
{
    use Uuids;
    protected $keyType = 'string';
    public $incrementing = false;
    protected $guarded = [];

    protected $table = 'attachments';

    protected $fillable = ['post_id','url'];

}
