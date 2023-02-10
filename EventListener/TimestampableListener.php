<?php

/**
 *
 *
 *
 *
 */
namespace Kazetenn\Core\EventListener;

use DateTime;
use Kazetenn\Core\Entity\BaseBlockInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class TimestampableListener
{
    public function prePersist(LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();
        if (!$entity instanceof BaseBlockInterface) {
            return;
        }

        $date = new DateTime();
        $entity->setCreatedAt($date);
        $entity->setUpdatedAt($date);

//        $entityManager = $args->getObjectManager();
//        $entityManager->persist($entity);
    }
}
