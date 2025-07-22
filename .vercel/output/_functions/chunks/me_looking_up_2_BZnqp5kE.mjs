const me_looking_up_2 = new Proxy({"src":"/_astro/me_looking_up_2.A5ppDdj4.png","width":283,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/me_looking_up_2.png";
							}
							
							return target[name];
						}
					});

export { me_looking_up_2 as default };
