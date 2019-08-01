<?php


namespace App\Service\Manager;


use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;

class UserManager
{
    /**
     * @var ObjectManager
     */
    private $objectManager;

    public function __construct(ObjectManager $objectManager)
    {
        $this->objectManager = $objectManager;
    }

    public function createUser(string $firstname, string $lastname, string $email, string $password)
    {
        $user = (new User())
            ->setFirstname($firstname)
            ->setLastname($lastname)
            ->setEmail($email)
            ->setPassword($password)
            ;

        // $password = $user->getPassword()
        // inject dans le constructor UserpasswordEncoderInterface
        // $passwordEncoded = $this->passwordEncorder->encode($user, $password);
        // $user->setPassword($passwordEncoded);

        $this->objectManager->persist($user);
        $this->objectManager->flush();

    }
}