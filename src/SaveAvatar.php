<?php

namespace TEQHungVo\JWTCookieLogin;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class SaveAvatar
{
    public function handle(Saving $event): void
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;
        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['avatarUrl'])) {
            $avatarUrl = $attributes['avatarUrl'];

            $user->changeAvatarPath($avatarUrl);
        }
    }
}
