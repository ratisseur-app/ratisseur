<?php

namespace App\Controller;

use App\Service\Manager\UserManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UsersController extends AbstractController
{

    /**
     * @var UserManager
     */
    private $userManager;

    public function __construct(UserManager $userManager)
    {
        $this->userManager = $userManager;
    }

    /**
     * Permet de créer un utilisateur
     *
     * @Route("/users", name="users.create", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function createUser(Request $request)
    {
        // creation d'un user grâce à un service manager
        $lastname  = $request->request->get('lastname');
        $firstname = $request->request->get('firstname');
        $email     = $request->request->get('email');
        $password  = $request->request->get('password');

        $this->userManager->createUser($firstname, $lastname, $email, $password);
        $data = [
            'code' => 201,
            'message' => "User $firstname successfully created !"
        ];

        return $this->json($data, 201);
    }

    /**
     * Permet de récuperer tous les utilisateurs
     *
     * @Route("/users", name="users.get", methods={"GET"})
     */
    public function retrieveUsers()
    {
        return $this->json(['all users'], 200);
    }
}
