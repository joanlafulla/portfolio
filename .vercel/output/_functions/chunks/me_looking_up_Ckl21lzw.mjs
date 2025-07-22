const me_looking_up = new Proxy({"src":"/_astro/me_looking_up.BY0oh2Fe.png","width":283,"height":377,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/joan.lafulla/Desktop/portfolio/app/src/assets/me_looking_up.png";
							}
							
							return target[name];
						}
					});

export { me_looking_up as default };
