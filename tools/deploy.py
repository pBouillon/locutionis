import logging
import pathlib
import shutil
import subprocess

from typing import NoReturn


logging.basicConfig(
    format='[%(levelname)s] %(message)s',
    level=logging.INFO)


def get_project_root() -> pathlib.Path:
    tools_directory = pathlib.Path(__file__).parent
    return tools_directory.parent


def cleanup_previous_bundle() -> NoReturn:
    target = get_project_root().joinpath('docs')

    if not target.exists():
        logging.debug('No previous build found')
        return

    shutil.rmtree(target)


def generate_bundle() -> NoReturn:
    root = get_project_root()

    subprocess.call(
        ['npm', 'run', 'build'],
        shell=True,
        stdout=subprocess.DEVNULL,
        cwd=root)

    shutil.copy(
        root.joinpath('docs/index.html'),
        root.joinpath('docs/404.html'))


def push_bundle() -> NoReturn:
    target = get_project_root().joinpath('docs')

    subprocess.call(
        ['git', 'add', target],
        shell=True,
        stderr=subprocess.DEVNULL,
        stdout=subprocess.DEVNULL,
        cwd=target)

    subprocess.call(
        ['git', 'commit', '-m', 'Regenerate the application\'s bundle'],
        shell=True,
        stdout=subprocess.DEVNULL,
        cwd=target)

    logging.debug('Bundle committed')

    subprocess.call(
        ['git', 'push'],
        shell=True,
        stdout=subprocess.DEVNULL,
        cwd=target)

    logging.debug('Bundle pushed')


if __name__ == '__main__':
    cleanup_previous_bundle()
    logging.info('Previous bundle removed')

    logging.info('Bundling the app ...')
    generate_bundle()
    logging.info('App bundle created')

    # push_bundle()
    logging.info('Bundle pushed to git')
