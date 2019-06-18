<?php // Julie automatic generated file

use Slim\Http\Request;
use Slim\Http\Response;
use App\Service\LoginService;
use Firebase\JWT\JWT;

$app->add(function (Request $request, Response $response, $next) {
	return $next($request, $response)
		->withHeader("Access-Control-Allow-Origin", "*")
        ->withHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin, Authorization")
        ->withHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");	
});

$app->post('/login', function (Request $request, Response $response, array $args) {
	$roles = ['guest'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$result = $this->MF->userAuthService()->postLogin($body['username'], $body['password'], $isForOwner, $isForManager);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/products/take-one', function (Request $request, Response $response, array $args) {
	$roles = ['manager'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$result = $this->MF->productHelperService()->postProductTakeOne($user['id'], $body['id'], $isForOwner, $isForManager);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/products/give-one', function (Request $request, Response $response, array $args) {
	$roles = ['manager'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$result = $this->MF->productHelperService()->postProductGiveOne($user['id'], $body['id'], $isForOwner, $isForManager);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->put('/products', function (Request $request, Response $response, array $args) {
	$roles = ['manager'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$productEntity = $this->MF->productService()->newEntity($params + $body);
	$result = $this->MF->productService()->putProduct($productEntity, $user);
	$status = !!$result ? 400 : 204;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/products', function (Request $request, Response $response, array $args) {
	$roles = ['manager'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$productEntity = $this->MF->productService()->newEntity($params + $body);
	$result = $this->MF->productService()->postProduct($productEntity, $user);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/products/receive-box', function (Request $request, Response $response, array $args) {
	$roles = ['manager'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$result = $this->MF->productHelperService()->postProductReceiveBox($user['id'], $body['products'], $isForOwner, $isForManager);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

$app->post('/products/sell-box', function (Request $request, Response $response, array $args) {
	$roles = ['manager'];
	if ($request->getHeader('Authorization')) {
		$authorization = end($request->getHeader('Authorization'));
		if ($authorization) {
			$user = (array) JWT::decode($authorization, LoginService::JWT_KEY, ['HS256']);
		} else {
		$user = (array) [];
		}
	} else {
		$user = (array) [];
	}
	if (!$user && !in_array('guest', $roles)) {
		return $response->withStatus(401);
	}
	if ($user && !in_array($user['role'], $roles)) {
		return $response->withStatus(401);
	}
	$params = (array) $args;
	$body = $request->getParsedBody() ?: [];
	$result = $this->MF->productHelperService()->postProductSellBox($user['id'], $body['products'], $isForOwner, $isForManager);
	$status = !!$result ? 201 : 400;
	return $response->withStatus($status)->withJson($result);
});

